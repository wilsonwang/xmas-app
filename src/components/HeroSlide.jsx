import Card from './Card'
import './heroSlide.css'

function HeroSlide({ slide }) {
  return (
    <>
    {/* <h1>{slide.title}</h1> */}
    <img src={slide.bgImg} alt="" className="bgImg" />
    <div className="banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    <div className="content">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                    </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-center">
                    <Card slide={slide} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default HeroSlide