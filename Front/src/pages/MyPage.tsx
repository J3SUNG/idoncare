import { Link } from "react-router-dom";
import Icon, { ICON_NAME } from "../components/common/Icon";
import BottomNav from "../components/common/BottomNav";

type Menu = {
  title: string;
  link: string;
  icon: ICON_NAME;
};

const boxMenus: Menu[] = [
  {
    title: "내 지갑",
    link: "/wallet",
    icon: "wallet",
  },
  {
    title: "설정",
    link: "/settings",
    icon: "settings",
  },
  {
    title: "로그아웃",
    link: "/logout",
    icon: "logout",
  },
];

const menus: Menu[] = [
  {
    title: "알림확인하기",
    link: "/alert",
    icon: "alert",
  },
  {
    title: "결제하기",
    link: "/purchase",
    icon: "purchase",
  },
  {
    title: "용돈 관리",
    link: "/pocketMoney",
    icon: "pocketMoney",
  },
  {
    title: "미션 관리",
    link: "/mission",
    icon: "mission",
  },
  {
    title: "충전하기",
    link: "/wallet/recharge",
    icon: "recharge",
  },
  {
    title: "송금하기",
    link: "/wallet/send",
    icon: "send",
  },
  {
    title: "거래내역 검색하기",
    link: "/wallet/search",
    icon: "search",
  },
  {
    title: "활동 보고서",
    link: "/report",
    icon: "report",
  },
  {
    title: "멤버 관리",
    link: "/member",
    icon: "member",
  },
  {
    title: "결제 비밀번호 설정하기",
    link: "/password/reset",
    icon: "reset",
  },
];

function MyPage() {
  return (
    <div>
      <div className="flex-col">
        <div className="w-[100px] h-[100px] rounded-[50%] bg-gray overflow-hidden mx-auto">
          자녀 아이콘
        </div>
        <div className="text-center">자녀 이름</div>
      </div>
      <div className="flex justify-center gap-5 my-10">
        {boxMenus.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="bg-gray w-[25%] rounded-xl text-center p-2"
            >
              <Icon name={item.icon} className="mx-auto" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
      <div className="my-10 mx-10">
        {menus.map((menu, index) => {
          return (
            <div key={index} className="my-3">
              <Link to={menu.link} className="flex items-center gap-2 shadow">
                <Icon name={menu.icon} size="medium"></Icon>
                <span className="text-lg">{menu.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
}

export default MyPage;
