import {
  AppContainer,
  ImageLogo,
  BackgroundContainer,
  ActionHeading,
} from './styledComponents'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <AppContainer>
      <ImageLogo
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <BackgroundContainer>
        <ActionHeading>Action Movies</ActionHeading>
        <MoviesSlider moviesList={actionMovies} />
        <ActionHeading>Comedy Movies</ActionHeading>
        <MoviesSlider moviesList={comedyMovies} />
      </BackgroundContainer>
    </AppContainer>
  )
}
export default PrimeVideo
