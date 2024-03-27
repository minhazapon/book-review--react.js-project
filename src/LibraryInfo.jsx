


const LibraryInfo = ({library}) => {

    const {images, name} = library


    return (
        <div>
               
               <div>

               <div className="card card-compact w-96 bg-base-100 shadow-xl border-[1px] border-violet-700">
                <figure><img className=" h-[300px] w-[400px]" src={images} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold text-violet-600"> {name} </h2>
                  
                 
                </div>
              </div>











               </div>


            
        </div>
    );
};

export default LibraryInfo;