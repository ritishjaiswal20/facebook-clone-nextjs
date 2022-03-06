import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
function InputBox() {
  //const[session]=useSession();
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src="https://links.papareact.com/k2j"
          width={40}
          height={40}
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder="whats on your mind"
          />
          <button hidden type="submit" onClick={sendPost}>
            SUBMIT
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-1">
        <div>
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-x5 sm:text-sm xl:text-base">Live video</p>
        </div>

        <div>
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-x5 sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div>
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text x-5 sm:text-ssm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
