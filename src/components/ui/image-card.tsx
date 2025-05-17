

interface Props {
  image: string;
  text: string;
}
export const ImageCard = ({image, text}: Props) => {
  return (
    <div className="w-[194px] p-2">
      <div className="h-[192px] w-full ">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div>
       <p className=" font-">{text}</p> 
      </div>
    </div>
  )
}