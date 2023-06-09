# 💎 **DIAMOND トークン**

## **👍 What can I do?**
Sepolia ネットワークにDIAMOND トークンを5分で発行できます！！

## **💪 Ready**
あなたが用意するべきものは、この2つだけです！<br>
- [Alcamy のアクセスポイント](#alcamy-のアクセスポイントを用意するには)
- [アドレスの秘密鍵](#アドレスの秘密鍵を用意するには)

## **🤯 Go !**
1. まず、このリポジトリをクローンします！

2. クローンしてきたディレクトリで、`npm install` を実行します。

3. .env ファイルをそのディレクトリで作成し、👇 のように編集します。
``` 
YOUR_ALCHEMY_API_URL=<用意したAlcamy のアクセスポイント>
YOUR_PRIVATE_SEPOLIA_ACCOUNT_KEY=<用意したアドレスの秘密鍵>
```
4. `npx hardhat run scripts/deploy.js --network sepolia` を実行します！<br>
👇 のようになるはずです！

```
Deploying contracts with the account: <あなたのブロックチェーンアドレス>
Account balance: <あなたのブロックチェーンアドレスに入ってるSepolia ETH の残高>
Token address: <できたてほやほやのトークンのアドレス>
```

5. MetaMask に発行したトークンをインポートして👇 のようになっていたら成功です！
<br>
<image alt = "MetaMask にDIAMONDトークンをインポートした結果" src = "img/result.jpg" width = "50%">

## **🤔 Q&A**
### **Alcamy のアクセスポイントを用意するには？**
1. [Alcamy](https://dashboard.alchemy.com/) アカウントを作成します。

2. 「\+ CREATE APP」 ボタンから、App を作成しましょう！
3. 作成できたらVIEW KEY を押してHTTPS のURL がAlcamy のアクセスポイントです！
<br>
<image alt = "Alcamy でApp URL を入手する方法" src = "img/how_to_get_URL.jpg" width = "50%">


### **アドレスの秘密鍵を用意するには？**
1. [MetaMask](https://metamask.io/) をインストールします！

2. 画面の指示に従って初期設定をします。

3. アカウントの詳細から、アドレスの秘密鍵をエクスポートすると、秘密鍵を取得できます！
<br>
<image alt = "MetaMask で秘密鍵を取得する方法" src = "img/how_to_get_private_key.jpg" width = "50%">


### **npm install ができない！**
npm install ができない！？<br>
そんなときは、`node -v` の実行結果と、[Node.js](https://nodejs.org/ja) のウェブサイトと推奨バージョンが合ってるか確認しましょう！<br>
そもそも、Node.js が環境にインストールされていない場合は、Volta というNode.js バージョン管理ツールを使ってインストールするのがオススメです！<br>
[Volta](https://volta.sh) のウェブサイトにアクセスして、Volta をインストールしよう！


### **コントラクトがデプロイできない！**
コントラクトがデプロイできない原因は、たぶんあなたのブロックチェーンアドレスに入ってるSepolia ETH が足りないからです。<br>
なので、[Alcamy が提供しているFauset](https://sepoliafaucet.com/) を利用して、Sepolia ETH を手に入れましょう！


### **トークンが表示されない！**
トークンが表示されない原因は、ネットワークがSepolia 以外になっている可能性が高いです。<br>
👇 のようにSepolia に切り替えてください！

<br>
<image alt = "ネットワークを切り替える" src = "img/network.jpg" width = "50%">

Sepolia がない場合は、原因は2つ考えられます<br>

1つ目は、MetaMask の設定でテストネットが表示されないようになっているかも知れません！<br>
設定の"高度な設定"からテストネットを有効にしたら、Sepolia を含むテストネットを表示できます。<br>

2つ目は、MetaMask にSepolia が登録されていない可能性があります。<br>
この場合は、[ChainList](https://chainlist.org/) というサービスを使ってMetaMask にチェーンを登録しましょう！

