
import { Container } from "@mui/system"
import { useState } from "react"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Buscador from "../Components/Buscador/Buscador"
import Footer from "../Components/Header y footer/Footer";
import { Header } from "../Components/Header y footer/header";
import Loading from "../Components/Loading/Loading"
import  { ListaNoticias } from "../Components/Noticias/Noticias"
import Paginador from "../Components/Paginacion/Paginacion"
import { getListadoNoticias } from "../Services/noticias"

const PaginaNoticias = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        if(searchParams.get("query")){
            buscarNoticia(pagina)
        }
    },[searchParams,pagina])


    const buscarNoticia = async () => {
        setIsLoading(true);
        const { articles: notis, totalResults } = await getListadoNoticias(searchParams.get('query'), pagina);
        
        setNoticias(notis);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        
        setIsLoading(false);
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda});
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };

    

     
        return <Container sx={{ display: 'flex', textAlign: 'center', marginTop:8}} maxWidth = "full"  className ="bg-white-200 font-sans flex flex-col items-center"  >
                <Header/>
                <Buscador onBuscar = {onBuscar} className="items-center"/>
                
                {isLoading && <Loading />}
                {noticias&& <ListaNoticias  noticias ={noticias} />}
                {noticias&& <Paginador  cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} />}
                
                <Footer/>   
            
            </Container>
            
    
           
    
}

export default PaginaNoticias

