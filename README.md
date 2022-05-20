# 🏗 scaffold-eth - Blockchain Studio

> Demonstration showing how the blockchain can play video and audio.

View the sample video and audio with the [live app](https://block-studio.surge.sh/) deployed on kovan network.

These should play in most broswers and without connecting your wallet.

The data is stored on the blockchain.  Anyone can play the video and audio in their app/site for free.

![piano](https://user-images.githubusercontent.com/75052782/168682799-b3f65571-8483-46eb-909c-b2b712237616.png)


### Installation

Clone the repo:
```
git clone  https://github.com/chrontast/BlockStudio.git
cd BlockStudio
```

Install dependencies:
```
yarn install
```

Start frontend
```
cd BlockStudio
yarn start
```

In a second terminal window, start a local blockchain
```
yarn chain
```

🔏 Edit your smart contract `BlockAudio.sol` in `packages/hardhat/contracts/BlockAudio.sol`

Change the _owner address in the constructor argument.



In a third terminal window, deploy contracts:
```
yarn deploy
```
##  VIDEO  ##
#Drag and drop your MP4 video file. Max size is 500kb:

![video1](https://user-images.githubusercontent.com/75052782/169444688-fcc50026-d5a4-4897-bd05-eca8dd2d8257.png)

#It will display how many parts the video is cut into.  Click on "Write Part 1" and then click each write needed.

#Refresh the screen and your video should appear.

![video2](https://user-images.githubusercontent.com/75052782/169444849-35b9b00a-2ea1-49a6-a78f-59cb7ff8def1.png)

##  AUDIO  ##
#Drag and drop your MP3 audio file. Max size is 500kb:

![audio1](https://user-images.githubusercontent.com/75052782/169444708-49d90472-6815-492e-b764-3f1d8c612540.png)

#Refresh the screen and your audio should load in the player.

🌍 You need an RPC key for production deployments/Apps, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app



## Contact

Join the telegram [support chat 💬](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with 🏗 scaffold-eth!
