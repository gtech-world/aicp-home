import { FC } from 'react';

interface TextType {
  textArray: { text: string; value: string | number }[];
}

const DivText: FC<TextType> = ({ textArray = [] }) => {
  return (
    <div>
      {textArray.length &&
        textArray.map((item, key) => {
          return (
            <div key={`text_${key}`} className="break-all text-[15px] ">
              <span className=" font-bold leading-7 text-[#000000] ">{item.text}：</span>
              <span className=" font-normal text-[#666666]">{item.value}</span>
            </div>
          );
        })}
    </div>
  );
};

export default DivText;
