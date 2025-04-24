

const InfrastructureArea = () => {
    const imageArr = Array.from({ length: 27 }, (_, i) => 
        `/assets/iics_image/infrastructure/infrastructure_${i + 1}.webp`
      );
  return (
    <div className="flex justify-center py-[100px]">
    <div className="flex flex-wrap justify-center gap-[30px] max-w-[calc(100%-30px)] ">
      {imageArr.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt=""
          className="w-[300px] h-[300px] object-cover rounded-[20px]"
        />
      ))}
    </div>
  </div>
  )
}

export default InfrastructureArea
