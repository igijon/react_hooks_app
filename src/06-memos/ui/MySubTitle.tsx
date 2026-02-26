interface Props {
  subTitle: string;
  callMyAPI: () => void;
}
export const MySubTitle = ({ subTitle, callMyAPI }: Props) => {
  console.log('My subtitle re-rendered:', subTitle);
  return (
    <>
      <h6 className="text-2xl font-bold">{subTitle}</h6>
      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={callMyAPI}>Llamar a función</button>
    </>
  );
};
