import PopUp from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'
import {
  Container,
  Thumbnail,
  ModalContainer,
  CloseButton,
  PlayerContainer,
} from './styledComponents'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Container>
      <PopUp
        modal
        trigger={<Thumbnail src={thumbnailUrl} alt="thumbnail" />}
        className="popup-container"
      >
        {close => (
          <ModalContainer>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <PlayerContainer>
              <ReactPlayer url={videoUrl} />
            </PlayerContainer>
          </ModalContainer>
        )}
      </PopUp>
    </Container>
  )
}
export default MovieItem
