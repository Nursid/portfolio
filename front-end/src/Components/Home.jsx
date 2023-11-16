import title_logo from './images/download.png';
function Home(){

    return(
    <div className="container">
    <div className="row mt-5">
        <div className="col-md-6">

      <div className="title">
        <h3>Hi There! </h3> 
        <h1>I'M NURSID ANSARI</h1>

      </div>

        </div>
        <div className="col-md-6">
        <img className='title_logo' src={title_logo} alt="" />
        </div>
    </div>

    </div>
    )
}
export default Home;
