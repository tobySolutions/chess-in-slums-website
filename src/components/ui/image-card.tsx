

interface Props {
  image: string;
  text: string;
}
export const ImageCard = ({image, text}: Props) => {
  return (
    <div className="w-[194px] p-2">
      <div>
        <img src={image}/>
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}