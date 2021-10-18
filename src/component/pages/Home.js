const Home = () => {
    return(
        <section>
        <div className="container-fluid">
          <div className="row">
              <div className="col-md-6">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src={require("../../asset/images/field.jpg").default} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={require("../../asset/images/lake.jpg").default} alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={require("../../asset/images/redwood.jpg").default} alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" type="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" type="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
              </div>
              <div className="col-md-6">
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor dui nulla, a viverra ante consequat vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus felis sapien, porttitor et nunc ut, tincidunt auctor orci. Duis pharetra vulputate ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lorem erat, bibendum et dapibus a, dignissim eu erat. Cras rhoncus nec ipsum vitae tristique. Morbi ut nulla quis turpis iaculis consequat. Praesent sed tempor orci, non iaculis nibh. Suspendisse aliquet ultricies sem, in convallis est facilisis ac. Nam rutrum, libero et fermentum tempor, nisl est congue nunc, ac suscipit est urna id orci. Etiam a justo vel tellus ultricies interdum ut id mauris. Ut eget magna volutpat, pellentesque nibh vitae, accumsan diam. </p>
              </div>
          </div>
        </div>
      </section>
    );
}
export default Home;