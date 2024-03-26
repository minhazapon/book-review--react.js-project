



const Bestinfo = ({best}) => {

    const {images, BookName, author } = best


    return (
        <div>

              <div>

              <div className="card w-[300px] h-[400px] bg-base-100 shadow-xl border-[1px] border-blue-600">
                <figure className="px-10 pt-10">
                  <img src={images} alt="Shoes" className=" h-[200px] w-[200px]  rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title"> Name: {BookName} </h2>
                  <p> author: {author} </p>
                  
                </div>
              </div>

              </div>


            
        </div>
    );
};

export default Bestinfo;