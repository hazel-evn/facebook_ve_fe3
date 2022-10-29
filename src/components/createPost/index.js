import { Feeling, LiveVideo, Photo } from "../../svg";
import "./index.css";
export default function CreatePost({ user, setPostVisible, profile }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.user.picture} alt="" />
        <div
          className="open_post hover2"
          onClick={() => {
            setPostVisible(true);
          }}
        >
          {user?.user.first_name} ơi, bạn đang nghĩ gì thế ?
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          Video trực tiếp
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Ảnh/Video
        </div>
        {profile ? (
          <div className="createPost_icon hover1">
            <i className="lifeEvent_icon"></i>
            Life Event
          </div>
        ) : (
          <div className="createPost_icon hover1">
            <Feeling color="#f7b928" />
            Feeling/Activity
          </div>
        )}
      </div>
    </div>
  );
}
