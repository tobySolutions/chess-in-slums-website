

interface Props {
  image: string;
  text: string;
}
export const ImageCard = ({image, text}: Props) => {
  return (
    <div className="sm:w-[194px] w-[174px] p-2 bg-white shadow-card">
      <div className="sm:h-[192px] h-[156px] w-full ">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div>
       <p className="font-seaweed text-center text-black font-normal text-lg py-2">{text}</p> 
      </div>
    </div>
  )
}


