// importacao dos componentes do MUI
import React, { useState, useEffect } from "react";
import dragData from "../../../data/dragData";
import { Grid, Typography } from "@mui/material";
import SneakerContainer from "../../utilities/dragComponent/DragDrop";

//declaração e exportação da função

export default function Drag() {
  // declarando as variáveis do useState
  const [images, setImages] = useState(dragData);

  // useEffect para verificar se já possui dados
  // no localStorage e caso haja carregar
  useEffect(() => {
    const imageOrder = JSON.parse(localStorage.getItem("imageOrder"));
    const imageTitle = JSON.parse(localStorage.getItem("imageTitle"));
    if (imageOrder && imageTitle) {
      const newImages = [];
      for (let i = 0; i < imageOrder.length; i++) {
        newImages.push({
          src: imageOrder[i],
          title: imageTitle[i],
        });
      }
      setImages(newImages);
    }
  }, []);

  // adicionado estado de draggingIndex
  const [draggingIndex, setDraggingIndex] = useState(-1); 

  // define o valor da constante sendo
  // uma função de argumento indice que define o 
  //valor de setDraggingIndex como sendo o próprio indice
  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
  };

  // previne o comportamento padrao da funcao
  // define como valor de newIndex o próprio indice
  const handleDragOver = (e, index) => {
    e.preventDefault();
    const newIndex = index;
    // verifica se o valor é estritamente igual e retorna
    if (draggingIndex === newIndex) {
      return;
    }
    // define o valor como sendo 
    // um spread do array images
    const imagesCopy = [...images];

    // define o valor como sendo
    // o array imagesCopy de indice dinamico
    const draggedImage = imagesCopy[draggingIndex];
    
    // manipula o array e cria um novo
    // com o item removido
    imagesCopy.splice(draggingIndex, 1);
    imagesCopy.splice(newIndex, 0, draggedImage);

    // define os valores de setImages
    setImages(imagesCopy);
    setImages(imagesCopy);
    setDraggingIndex(newIndex);

    // funcao para armazenar as preferencias
    // no armazenamento local
    localStorage.setItem(
      "imageOrder",
      JSON.stringify(imagesCopy.map((image) => image.src))
    );
    localStorage.setItem(
      "imageTitle",
      JSON.stringify(imagesCopy.map((image) => image.title))
    );
  };

  // funcao para o fim da ação
  // define o valor como -1  
  const handleDragEnd = () => {
    setDraggingIndex(-1);
  };

  return (
    <Grid
      container
      id="organize"
      direction="column"
      sx={{
        backgroundColor: "background.paper",
        alignItems: "center",
        justifyContent: "center",
        height: {
          lg: "100vh",
          sm: "100%",
        },
        flexWrap: "nowrap",
        // media query para esconder em dispotivos móveis
        // uma vez que o código não estava funcionando em touch
        '@media (max-width: 803px)': {
          display: 'none',
        }
      }}
    >
      <Grid item>
        <Typography
          variant="h6"
          display="block"
          color="primary.main"
          align="center"
        >
          Organize seus favoritos
        </Typography>
        <Typography variant="p" color="initial" display="block" align="center">
          Arraste pra colocar na ordem que você mais gosta.
        </Typography>
        <Typography
          variant="caption"
          color="initial"
          display="block"
          align="center"
        >
          Quando você voltar eles vão estar na ordem que você deixou.
        </Typography>
      </Grid>

      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        sx={{
          display: "grid",
          placeItems: "center",
          my: 4,
        }}
      >
        <Grid
          container
          className="drag-container"
          sx={{ width: "75vw", p: 1.25 }}
        >
          <Grid
            item
            className="image-container"
            sx={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 1.25,
              width: "100%",
            }}
          >
            {/* mapeia todo o array e pega as informações
                como imagem, index e titulo */}
            {images.map((image, index) => (
              <Grid
                key={image.title}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={index === draggingIndex ? "dragging" : ""}
              >
                {/* renderiza passando como prop a imagem, titulo e */}
                <SneakerContainer
                  image={image.src}
                  title={image.title}
                  key={image.title}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
