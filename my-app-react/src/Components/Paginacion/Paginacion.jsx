import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
    
}) => {
    const cambioPagina = (_e, pagina)=>{
        onChange(pagina)
    }
    return (
    
        <Pagination sx={{ flexGrow: 0, display:"flex", marginTop:"25px", marginBottom:"80px" }}
            
            count={cantidadPaginas} 
            color="primary" 
            onChange={cambioPagina}
            />
    )
}


export default Paginador