import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ImageBackground, 
    TouchableOpacity, 
    ScrollView,
    FlatList 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

const Post = () => {

    const image = { uri: "https://lh3.googleusercontent.com/proxy/LcdaVAT_nil-YEGdTJ-djYzW7qIItFdy0FHtl6mNYZPjNPKrOrUlKns5kqSSa_Cy8CHsux1eWLwzJIWIOdvBbr398CLUpq_vxyo2gPxfbrWrzYRoS8xhnDgWeQl6X3E" };
    
    return(
        <View style={styles.container}>
            <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
            />

            <Text style={styles.Tagline}>Aprendendo React Native</Text>
            <Text style={styles.Placename}>Contruindo App básico com React Native</Text>

            <TouchableOpacity style={styles.btn}>
                <Feather name="arrow-left" size={22} color="#fff"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
                <Feather name="heart" size={22} color="#fff"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bookTicketText}>
                <Text style={styles.btnText}>Book View</Text>
            </TouchableOpacity>

            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text style={{ padding: 14, fontSize: 22, fontWeight: 'bold' }}>App React Native</Text>
                <Text style={styles.description}>Aplicativo cxontrindo com React Native</Text>
            </ScrollView>
        </View>
    )
}

export default Post;