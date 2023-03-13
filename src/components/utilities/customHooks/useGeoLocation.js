// importacao do react e dos hooks
import React, { useState, useEffect } from "react";

// declaracao da funcao/constante
const useGeoLocation = () => {

    // useState para criar a funcao e
    // armazenar o valor em location
    const [location, setLocation] = useState({
        loaded: false,
        lat: "",
        lng: ""
    });

    // funcao ativada ao aceitar
    // a geolocalizacao

    // armazena os valores de latitude
    // e longitude no objeto
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
                lat: location.coords.latitude,
                lng: location.coords.longitude,
        });
    };

    // funcao para informar se houver erro
    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    //  useEffect para iniciar a funcao
    //  se nao houver a geolocizacao no navegador
    //  retorna a mensagem definida
    //  se houver pega a posicao atual usando
    //  como argumento as funcoes acima declaradas
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation não suportada",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        // array no final para que
        // o useEffect seja iniciado apenas
        // uma vez evitando loop
    }, []);

    // retorna o valor da
    // latitude e longitude
    // armazenado na constante
    return location;
};

export default useGeoLocation;