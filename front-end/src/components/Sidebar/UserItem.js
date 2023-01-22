import { Avatar } from "antd";
const UserItem = ({ userName, userRole }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 p-2 cursor-pointer">
      <div className="w-10">
        <h3>
          <Avatar
            className="rounded-full object-cover w-[48px] h-[48px]"
            size={70}
            src={
              userRole === "ADMIN"
                ? "https://cdn-icons-png.flaticon.com/512/1802/1802979.png"
                : "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
            }
          />
        </h3>
      </div>
      <div className="pl-10 w-[calc(100%-48px)]">
        <h5 className="text-xs text-default font-normal truncate w-full">
          {userName}
        </h5>
        <h5 className="text-xs font-normal text-disabled">{userRole}</h5>
      </div>
    </div>
  );
};

export default UserItem;
