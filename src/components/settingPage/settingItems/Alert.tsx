import { useState } from 'react';
import Check from '../../../assets/setting/Check.png';
import NonCheck from '../../../assets/setting/nonCheck.png';
import * as S from '../styles/SettingStyle';

export default function Alert() {
    const [isPushNotificationChecked, setIsPushNotificationChecked] = useState(false);
    const [isMarketingNotificationChecked, setIsMarketingNotificationChecked] = useState(true);
    const [isAdvertisingNotificationChecked, setIsAdvertisingNotificationChecked] = useState(true);

    const togglePushNotification = () => {
        setIsPushNotificationChecked(!isPushNotificationChecked);
    };

    const toggleMarketingNotification = () => {
        setIsMarketingNotificationChecked(!isMarketingNotificationChecked);
    };

    const toggleAdvertisingNotification = () => {
        setIsAdvertisingNotificationChecked(!isAdvertisingNotificationChecked);
    };

    return (
        <S.AlertBox>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <S.profileTitle>알림 설정</S.profileTitle>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }} onClick={togglePushNotification}>
                <img src={isPushNotificationChecked ? Check : NonCheck} alt={isPushNotificationChecked ? '체크' : '비체크'} style={{ width: '24px', height: '24px' }} />
                <div>새로운 소식 및 추천 콘텐츠 푸시 알림 동의</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }} onClick={toggleMarketingNotification}>
                <img src={isMarketingNotificationChecked ? Check : NonCheck} alt={isMarketingNotificationChecked ? '체크' : '비체크'} style={{ width: '24px', height: '24px' }} />
                <div>해택 및 마케팅 알림 동의</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }} onClick={toggleAdvertisingNotification}>
                <img src={isAdvertisingNotificationChecked ? Check : NonCheck} alt={isAdvertisingNotificationChecked ? '체크' : '비체크'} style={{ width: '24px', height: '24px' }} />
                <div>이벤트 및 광고성 정보 수신</div>
            </div>
        </div>
        </S.AlertBox>
    );
}
