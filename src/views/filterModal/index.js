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
import {getProductsAction} from '@src/redux/actions/products/productsActions';

export default function FilterModal({closePress}) {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedValuesModal, setSelectedModalValues] = useState([]);
  const [selectedValuesBrand, setSelectedBrandValues] = useState([]);

  const {productsData} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const brandSet = new Set(
    productsData.map(productsData => productsData.brand),
  );
  const uniqueBrands = Array.from(brandSet).map(brand => {
    const productsWithBrand = productsData.filter(
      product => product.brand === brand,
    );
    return {
      brand,
      products: productsWithBrand,
    };
  });

  const modelSet = new Set(
    productsData.map(productsData => productsData.model),
  );
  const uniqueModels = Array.from(modelSet).map(model => {
    const productsWithModel = productsData.filter(
      product => product.model === model,
    );
    return {
      model,
      products: productsWithModel,
    };
  });

  const handleCheckboxModal = value => {
    if (selectedValuesModal.includes(value)) {
      setSelectedModalValues(selectedValuesModal.filter(val => val !== value));
    } else {
      setSelectedModalValues([...selectedValuesModal, value]);
    }
  };

  const handleCheckboxBrand = value => {
    if (selectedValuesBrand.includes(value)) {
      setSelectedBrandValues(selectedValuesBrand.filter(val => val !== value));
    } else {
        setSelectedBrandValues([...selectedValuesBrand, value]);
    }
  };

  console.log('selectedValuesModal', selectedValuesModal);
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
        <ScrollView style={styles.area}>
        <Text style={styles.areaTitle}>Brand</Text>
          {uniqueBrands?.map((item, index) => (
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
        <ScrollView style={styles.area}>
          <Text style={styles.areaTitle}>Model</Text>
          {uniqueModels?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.select}
              onPress={() => {
                handleCheckboxModal(item?.model);
              }}>
              {selectedValuesModal.includes(item?.model) ? (
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
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
  },
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
  },
  area: {
    maxHeight: 200,
  },
  areaTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#333333B2',
    marginBottom: 22,
  },
  line: {
    backgroundColor: '#00000080',
    height: 1,
    width: '100%',
    marginVertical: 20,
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
});
