# Tiktok Clone NextJS

- 유튜브: <https://youtu.be/7zLyVzItZlQ?si=7OOEfjOyN7-OPGzO>
- 데모:

## 진행중

- [1:15:14 / 4:45:45](https://youtu.be/7zLyVzItZlQ?si=wL8vW8vVU-RsEIlV&t=4514)

## Node

### eslint

- pnpm으로 변경하여 진행하니 vscode에서 다음과 같은 경고문이 출력됨

```text
If you are using yarn or pnpm instead of npm set the setting `eslint.packageManager` to either `yarn` or `pnpm`
Alternatively you can disable ESLint for the workspace folder tiktok-clone-nextjs by executing the 'Disable ESLint' command.
```

- .vscode/settings.json에 `"npm.packageManager": "pnpm"`을 추가함
- 재실행하니까 설정 상관없이 오류 해결됨

### pixabay

- 영상을 얻고 싶으면 여기서 찾을 수 있다 <https://pixabay.com/>
