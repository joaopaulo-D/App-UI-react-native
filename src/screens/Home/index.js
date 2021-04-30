import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Image, 
    TextInput, 
    FlatList,
    ImageBackground,
    ScrollView, 
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons'
import styles from './styles';

const Home = ({ navigation }) => {
    const image = { uri: "https://i.pinimg.com/originals/5f/48/3e/5f483ef61cc6416ad880ac33b599897b.jpg" };
    const projetoRecentes = { uri: "https://revelry.co/wp-content/uploads/2019/05/react-native-UX-design.gif", title: "React Native"};
    
    const [gallery, setGallery] = useState([
        {
            title: "JavaScript",
            image: { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" }
        },
        {
            title: "ReactJS",
            image: { uri: "https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png" }
        },
        {
            title: "React Native",
            image: { uri: "https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png" }
        },
        {
            title: "NodeJS",
            image: { uri: "https://static.imasters.com.br/wp-content/uploads/2018/06/27074827/instalacion-de-nodejs-en-ubuntu-t1.jpg" }
        },
        {
            title: "TypeScript",
            image: { uri: "https://bognarjunior.files.wordpress.com/2018/09/typescript.png" }
        },
    ]);

    const navPost = () => {
        navigation.navigate('Post');
    }

    return(
        <View style={{ flexGrow: 1, height: '100%', backgroundColor: '#BCCBCD'}}>
            <View>
                <ImageBackground
                source={image}
                style={{ width: '100%', height: 270, opacity: 0.9 }}
                imageStyle={{borderBottomRightRadius: 65}}
                >
                    <View style={styles.DarkOverlay}></View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.UserGreet}>João Paulo</Text>
                        <Text style={styles.UserText}>Criando interface com React Native</Text>
                    </View>
                    <View>
                        <TextInput
                        style={styles.searchBox}
                        placeholder="Pesquise..."
                        placeholderTextColor='#666'
                        >
                        </TextInput>
                        <Feather name="search" size={22} color="#666" style={{ position: 'absolute', top: 30, right: 60, opacity: 0.6}}/>
                    </View>
                    <Feather name="menu" size={22} color="#fff" style={{ position: 'absolute', top: 40, left: 16}}/>
                    <Feather name="bell" size={22} color="#fff" style={{ position: 'absolute', top: 40, right: 30 }}/>
                </ImageBackground>
            </View>

            <ScrollView>
                <View style={{padding: 20}}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Conhecimentos</Text>
                </View>
                <View>
                    <FlatList
                    horizontal={true}
                    data={gallery}
                    renderItem={({item}) => {
                        return(
                            <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                                <TouchableOpacity onPress={navPost}>
                                    <Image source={item.image} style={{ marginRight: 8, width: 150, height: 170, borderRadius: 10 }}/>
                                    <View style={styles.ImageOverlay}></View>
                                    <Feather name="map-pin" size={16} color="White" style={styles.imageLocation}/>
                                    <Text style={styles.ImageText}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    />
                </View>
                <View style={{marginBottom: 60}}>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Projetos Recentes</Text>
                        <Text style={{fontSize: 14, fontWeight: "bold", color: "#BD73E7"}}>View All</Text>
                    </View>
                    <Image 
                    source={projetoRecentes}
                    style={styles.recents}
                    />
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Feather name="map-pin" color="white" size={22} style={styles.icon}/>
                            <Text style={styles.iconText}>{projetoRecentes.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>Criando App com React Native</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;