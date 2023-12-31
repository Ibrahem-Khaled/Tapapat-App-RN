import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Components/Header'
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

const Dilever = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={{ flex: 1 }}>
            <Header name={'استلام'} />
            <View style={styles.subHeader}>
                <View style={{ flexDirection: "row", alignItems: "center", width: "28%", justifyContent: "space-around" }}>
                    <Entypo name="map" size={28} color="tomato" />
                    <Entypo name="dots-three-horizontal" size={28} color="tomato" />
                </View>
                <Text style={styles.titleSubheader}>الضيعة</Text>
            </View>
            <View style={{
                width: "90%",
                backgroundColor: "#fff",
                alignSelf: "center",
                margin: 5,
                borderRadius: 10
            }}>
                <Text style={{ fontWeight: "bold", margin: 5, color: 'gray', fontSize: 16 }}>تفاصيل الطلب</Text>
                <Text style={{ fontWeight: "bold", margin: 5, fontSize: 19, textAlign: "right", marginRight: 10 }}>19954665(#9002)</Text>
                <Text style={{ margin: 5, color: 'gray', fontSize: 16, textAlign: "right" }}>احمد</Text>

                <TouchableOpacity style={{
                    width: "90%",
                    height: 35,
                    backgroundColor: "gray",
                    alignSelf: "center",
                    margin: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Text style={{ fontWeight: "bold", margin: 5, color: '#fff', fontSize: 16 }}>جاهز في غضون no valu</Text>
                </TouchableOpacity>


                <View style={styles.container}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                </View>

                <View style={{
                    width: "100%",
                    margin: 1,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 2
                }}>
                    <Text style={{ fontWeight: "bold", margin: 5, color: 'gray', fontSize: 14 }}>المبلغ</Text>
                    <Text style={{ fontWeight: "bold", margin: 5, color: 'gray', fontSize: 16 }}>لا يتم الدفع لدي المطعم</Text>

                </View>
                <View style={{
                    width: "100%",
                    margin: 1,
                }}>
                    <Text style={{ fontWeight: "bold", margin: 5, color: 'gray', fontSize: 14 }}>التعليمات</Text>
                    <View style={{
                        width: "80%",
                        margin: 1,
                        backgroundColor: "#fff8f0",
                        height: 100,
                        borderRadius: 8,
                        alignSelf: 'center',
                        justifyContent: "space-around",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <MaterialIcons name="g-translate" size={28} color="tomato" />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontWeight: "bold", margin: 5, fontSize: 14, textAlign: "left" }}>City:sadsadsadsadsda</Text>
                            <Text style={{ fontWeight: "bold", margin: 5, fontSize: 14, textAlign: "left" }}>عبدون عبدون </Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Dilever

const styles = StyleSheet.create({
    subHeader: {
        width: "99%",
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        margin: 5
    },
    titleSubheader: {
        fontWeight: "bold",
        fontSize: 18,
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})