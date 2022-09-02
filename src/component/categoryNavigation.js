import { useNavigation } from "@react-navigation/native"


export default function UseCategoryNavigation({name}) {
    const navigation = useNavigation();
    
    if (name === 'Beauty') {
        navigation.navigate('BeautyPage')
    } else if (name === 'Electronices') {
        navigation.navigate('ElectronicsPage')
    } else if (name === 'Fashion') {
        navigation.navigate('FashionPage')
    } else if (name === 'Mobile') {
        navigation.navigate('MobilePage')
    } else if (name === 'Grocery') {
        navigation.navigate('GroceryPage')
    }
}
