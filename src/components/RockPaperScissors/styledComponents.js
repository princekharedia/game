import styled from 'styled-components'
export const AppContainer = styled.div`
background-color:#223a5f;
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center
`
export const ResultContainer = styled.div`
padding:20px;
width:65%;
diplay:flex;
justify-content:space-between:
align-items: center;
`
export const Options = styled.h1`
font-size:16px;
color:white;
`
export const OptionsContainer = styled.div`
display:flex;
felx-direction:column;
`
export const ScoreContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:white;
`
export const ScorePhrase = styled.p`
font-size:16px;
color:#223a5f;
`
export const ScoreNumber = styled.p`
font-size:28px;
color:#223a5f;
font-family:"Roboto";
`
export const GameViewContainer = styled.div`
width:65%;
height:60vh;
display:flex;
justify-content:center;
align-items:center;
`
export const GameOptionsList = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
max-width:480px;
flex-wrap:wrap;
`
export const TriggerButton = styled.button`
font-size:16px
color:#223a5f
padding:8px;
background-color:white;
outline:none;
cursor:pointer;
`
export const PopupContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const CloseButton = styled.button`
border:none;
cursor:pointer;
outline:none;
background-color:transparent;
`
export const PopupImage = styled.img`
width:90%;
align-self:center;
`
export const PopupBody = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
`
export const GameResultViewContainer= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
max-width:560px;
`
export const SelectedOptionsContainer = styled.div`
display:flex;
width:80%
justify-content:center;
`
export const GameUserOptionContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const GameParticipantText = styled.p`
color:white;
font-size:20px;
`
export const GameParticipantChoiceImage = styled.img`
width:170px;
height:170px;
`
export const ResultText = styled.p`
color:white;
font-size:24px;
text-align:center;
`
export const PlayAgainButton = styled.button`
font-size:16px;
color:#223a5f;
background-color:white;
outline:none;
cursor:pointer;
align-self:center
`