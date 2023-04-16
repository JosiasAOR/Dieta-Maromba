import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
export function HomeScreen({ navigation }) {
    const [dadosDieta, setDadosDieta] = useState(null)
    useEffect(() => {
        recuperarItem()

    }, []); // Dependências vazias, executa apenas uma vez

    const recuperarItem = async () => {
        try {
            const valor = await AsyncStorage.getItem('TMB');
            setDadosDieta(valor)
            console.log('Valor recuperado:', valor);
        } catch (error) {
            console.log('Erro ao recuperar item:', error);
        }
    }
    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Consumo Diario")}
                    >
                        <Text style={styles.buttonText}>alimentação Diaria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Montar Dieta')}
                    >
                        <Text style={styles.buttonText}>Montar Dieta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Calcular Taxa Metaborlica Basal')}
                    >
                        <Text style={styles.buttonText}>Calcular TMB</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>
                    Sua Taxa Metabólica Basal: {dadosDieta}
                </Text>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionHeaderText}>Dicas Nutricionais</Text>
                    <Text style={styles.sectionBodyText}>Aqui vão algumas dicas para você manter uma alimentação saudável:</Text>
                    <Text style={styles.sectionBodyText}>- Coma mais vegetais e frutas</Text>
                    <Text style={styles.sectionBodyText}>- Evite alimentos processados e com muito açúcar</Text>
                    <Text style={styles.sectionBodyText}>- Beba bastante água ao longo do dia</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionHeaderText}>Receitas Saudáveis</Text>
                    <TouchableOpacity style={styles.recipeCard}>
                        <Text style={styles.recipeTitle}>Salada de Quinoa</Text>

                        <Image source={{ uri: 'https://veganandcolors.com/wp-content/uploads/2020/01/29-750x637.jpg' }} style={styles.bannerImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.recipeCard}>
                        <Text style={styles.recipeTitle}>Frango com Legumes no Vapor</Text>

                        <Image source={{ uri: 'https://www.aarquiteta.com.br/blog/wp-content/uploads/2022/02/Peito-de-Frango-com-Legumes1.jpg' }} style={styles.bannerImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionHeaderText}>Exercícios Físicos</Text>
                    <Text style={styles.sectionBodyText}>Aqui vão algumas sugestões de exercícios para você fazer em casa:</Text>
                    <Text style={styles.sectionBodyText}>- Flexões de braço</Text>
                    <Text style={styles.sectionBodyText}>- Abdominais</Text>
                    <Text style={styles.sectionBodyText}>- Agachamentos</Text>
                </View>

                <TouchableOpacity style={styles.bannerAd}>
                    <Image source={{ uri: 'https://guarulhosonline.com.br/wp-content/uploads/2020/04/Exerc%C3%ADcios_em_casa.jpg' }} style={styles.bannerImage} />
                </TouchableOpacity>


            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionBodyText: {
        fontSize: 16,
        marginBottom: 5,
    },
    recipeCard: {
        flexDirection: 'column',
        alignItems: 'center',
        alignItems: 'center', // Adicionado aqui
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    recipeImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 5,
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bannerAd: {
        alignItems: 'center',
        marginBottom: 20,
    },
    bannerImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        padding: 10,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
