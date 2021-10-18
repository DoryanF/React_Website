import { useEffect, useState } from "react";
import Pagination from "../Pagination";
const Gallery = () => {
    const [galleryArray, setGallery] = useState([]);
    const [page, setPage] = useState(1);



    const loadPicsum = () => {
        fetch("https://picsum.photos/v2/list?page="+page+"&limit=6")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setGallery(data);
        })
    }

    

    useEffect(() => {
        loadPicsum();
    },[page]);

    const ListImages = () => (
        <div className="row">
            {
                galleryArray.map((img) => {
                    const urlImg = "https://picsum.photos/id/"+img.id+"/640/420";
                    return(
                        <div key={img.id} className="col-12 col-md-4">
                            <a href={img.url} target="_blank" rel="noreferrer">
                                <img className="img-fluid mb-3" src={urlImg} alt="img-1"/>
                            </a>
                            <h4 className="text-center">{img.author}</h4>
                        </div>
                        
                    )
                })
            }            
        </div>
    )

    return(
        <section>
            <div className="container-fluid">
                    <div className="col-md-6">
                        <h1>Gallery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="col-12">
                            <Pagination page ={page} setPage={setPage}/>
                        </div>
                        <ListImages/>
                        <div className="col-12">
                            <Pagination page ={page} setPage={setPage}/>
                        </div>
                        
                    </div>
                </div>
        </section>
        
    );
}

export default Gallery;