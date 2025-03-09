// 핸드폰 기종 선택 토글 컴포넌트

import { styled } from 'styled-components';
import { IphoneIconSVG } from '../../assets/svg/IconSVG';
import { PhoneModelProps, phoneModels } from '../../constants/home';

interface Props {
  selectedPhone: PhoneModelProps;
  setSelectedPhone: (phone: PhoneModelProps) => void;
}
const SelectPhoneModel = ({ selectedPhone, setSelectedPhone }: Props) => {
  return (
    <Layout>
      <div className="icon">
        <IphoneIconSVG />
      </div>
      <select
        className="model"
        value={selectedPhone.name}
        onChange={(e) => {
          const phone = phoneModels.find((p) => p.name === e.target.value);
          if (phone) setSelectedPhone(phone);
        }}
      >
        {phoneModels.map((phone) => (
          <option key={phone.name} value={phone.name}>
            {phone.name}
          </option>
        ))}
      </select>
    </Layout>
  );
};
export default SelectPhoneModel;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 190px;

  border-radius: 10px;
  background-color: #d9d9d9;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;

    border-radius: 10px;
    background: #c4c4c4;
  }
  .model {
    display: flex;
    margin: auto;

    font-size: 1rem;
  }

  cursor: pointer;
`;
