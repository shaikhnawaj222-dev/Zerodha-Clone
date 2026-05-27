import HeroPng from "../../assets/homeHero.png"


const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src={HeroPng} alt="Hero" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform invest in stocks, derivatives, mutual funds, and more</p>
        <button className="mx-auto p-2 btn btn-primary fs-5 mb-5" style={{width:"20%"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero