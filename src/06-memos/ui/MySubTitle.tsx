interface Props {
  subTitle: string;
}
export const MySubTitle = ({ subTitle }: Props) => {
  console.log('My subtitle re-rendered:', subTitle);
  return (
    <>
      <h6 className="text-2xl fornt-bold">{subTitle}</h6>
      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">Llamar a función</button>
    </>
  );
};
