import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CheckIcon, CloseIcon} from '@src/constants/icons';
import {sortByFilterData} from '@src/data/filterData';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterUpdateAction,
  getFilterAction,
} from '@src/redux/actions/filters/filtersAction';
import {SearchInput} from '@src/components';

export default function FilterModal({closePress}) {
  const {filtersData} = useSelector(state => state.filters);

  const [brandSearch, setBrandSearch] = useState('');
  const [modelSearch, setModelSearch] = useState('');
  const {modelFilter, brandFilter, sortByFilter} = useSelector(
    state => state.filters,
  );

  const [selectedValue, setSelectedValue] = useState(
    sortByFilter ? sortByFilter : 'option1',
  );
  const [selectedValuesModel, setSelectedModelValues] = useState(
    modelFilter ? modelFilter : [],
  );
  const [selectedValuesBrand, setSelectedBrandValues] = useState(
    brandFilter ? brandFilter : [],
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilterAction());
  }, []);

  const brandSet = new Set(filtersData?.map(filtersData => filtersData?.brand));
  const uniqueBrands = Array.from(brandSet).map(brand => {
    const productsWithBrand = filtersData.filter(
      product => product.brand === brand,
    );
    return {
      brand,
      products: productsWithBrand,
    };
  });

  const modelSet = new Set(filtersData?.map(filtersData => filtersData.model));
  const uniqueModels = Array.from(modelSet).map(model => {
    const productsWithModel = filtersData.filter(
      product => product.model === model,
    );
    return {
      model,
      products: productsWithModel,
    };
  });

  const handleCheckboxModel = value => {
    if (selectedValuesModel.includes(value)) {
      setSelectedModelValues(selectedValuesModel.filter(val => val !== value));
    } else {
      setSelectedModelValues([...selectedValuesModel, value]);
    }
  };

  const handleCheckboxBrand = value => {
    if (selectedValuesBrand.includes(value)) {
      setSelectedBrandValues(selectedValuesBrand.filter(val => val !== value));
    } else {
      setSelectedBrandValues([...selectedValuesBrand, value]);
    }
  };

  const handleFilter = () => {
    const params = {
      sortByFilter: selectedValue,
      modelFilter: selectedValuesModel,
      brandFilter: selectedValuesBrand,
    };
    dispatch(filterUpdateAction(params));
    closePress();
  };

  return (
    <Modal style={styles.modal}>
      <View style={styles.header}>
        <TouchableOpacity onPress={closePress} style={styles.closeButton}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.areaTitle}>Sort By</Text>
          {sortByFilterData?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedValue(item?.name)}
              style={styles.select}>
              {selectedValue === item?.name ? (
                <View style={styles.radioButton}>
                  <View style={styles.radioInner}></View>
                </View>
              ) : (
                <View style={styles.radioButton}></View>
              )}
              <Text>{item?.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.line}></View>
        <Text style={styles.areaTitle}>Brand</Text>
        <SearchInput setSearchKey={setBrandSearch} type={'filter'} />
        <ScrollView style={styles.area}>
          {uniqueBrands
            ?.filter(item =>
              item?.brand.toLowerCase().includes(brandSearch.toLowerCase()),
            )
            ?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.select}
                onPress={() => {
                  handleCheckboxBrand(item?.brand);
                }}>
                {selectedValuesBrand.includes(item?.brand) ? (
                  <View style={styles.checkButtonSelect}>
                    <CheckIcon />
                  </View>
                ) : (
                  <View style={styles.checkButton}></View>
                )}
                <Text>{item?.brand}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>

        <View style={styles.line}></View>
        <Text style={styles.areaTitle}>Model</Text>
        <SearchInput setSearchKey={setModelSearch} type={'filter'} />
        <ScrollView style={styles.area}>
          {uniqueModels
            ?.filter(item =>
              item?.model.toLowerCase().includes(modelSearch.toLowerCase()),
            )
            ?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.select}
                onPress={() => {
                  handleCheckboxModel(item?.model);
                }}>
                {selectedValuesModel.includes(item?.model) ? (
                  <View style={styles.checkButtonSelect}>
                    <CheckIcon />
                  </View>
                ) : (
                  <View style={styles.checkButton}></View>
                )}
                <Text>{item?.model}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {
            handleFilter();
          }}>
          <Text style={styles.primaryButtonText}>Primary</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 55 : 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    left: 26,
    zIndex: 40,
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 20,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  area: {
    maxHeight: 110,
    marginTop: 20,
  },
  areaTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#333333B2',
    marginBottom: 17,
  },
  line: {
    backgroundColor: '#00000080',
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
  select: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 100,
    borderColor: '#2A59FE',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    backgroundColor: '#2A59FE',
    width: 8,
    height: 8,
    borderRadius: 100,
  },
  checkButton: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#2A59FE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkButtonSelect: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: '#2A59FE',
    borderColor: '#2A59FE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkInner: {
    backgroundColor: '#2A59FE',
    width: 8,
    height: 8,
    borderRadius: 100,
  },
  primaryButton: {
    backgroundColor: '#2A59FE',
    padding: 8,
    marginTop: 30,
    borderRadius: 4,
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: Platform.OS === 'ios' ? 40 : 20,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
