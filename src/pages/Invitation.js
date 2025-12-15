import React, {useState} from 'react'
import flower from '../images/flower.png'
import ContactModal from '../components/ContactModal';

function Invitation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function FamilyInfo({dad, mom, child, relation}) {
    return (
      <div className='invitation__family'>
          <div className='invitaion__parent'>
              <div>{dad}·{mom}</div>
          </div>
          <div>{relation}</div>
          <div className='invitation__child'>{child}</div>
      </div>
    )
  }
  return (  
    <div className='bc-pink container'>
        <img src={flower} className='flower' alt='flower'/>
        <div className='invitation__title'>초대합니다</div>
        <div className='invitation__content'>
          <div><span className="invitation__initial">명</span>백해진 마음으로</div>
          <div><span className="invitation__initial">현</span>명한 선택 앞에 서로를 마주하고</div>
          <div><span className="invitation__initial">혜</span>심으로 다름을 품으며</div>
          <div><span className="invitation__initial">선</span>택한 길을 함께 걷고자 합니다.</div>
          <div>두 사람의 새로운 시작을 </div>
          <div>함께 축복해주시면 감사하겠습니다. </div>
        </div>
        {/* <FamilyInfo dad="김아빠" mom="박엄마" child="김신랑" relation="의 차남" />
        <FamilyInfo dad="이아빠" mom="우엄마" child="이신부" relation="의 장녀" /> */}
        <button className='invitation__btn-contact' onClick={openModal}>연락하기</button>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation
