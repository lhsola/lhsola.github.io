import React, { useEffect } from "react";

function ShareButton() {
  useEffect(() => {
    // ✅ 카카오 SDK 불러오기
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        // 📍 여기에 복사한 JavaScript 키 넣기!
        window.Kakao.init("cd658d3e67b4528d63bee93338dad37a");
      }
    };
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "🤵🏻❤️👰🏻 결혼식에 초대합니다.",
        description: "4월 25일 12시 서초 디토레스토랑",
        imageUrl: "https://lhsola.github.io/main.jpg", // ✅ 썸네일 이미지 주소
        link: {
          mobileWebUrl: "https://lhsola.github.io",
          webUrl: "https://lhsola.github.io",
        },
      },
      buttons: [
        {
          title: "모바일 청첩장 보기",
          link: {
            mobileWebUrl: "https://lhsola.github.io",
            webUrl: "https://lhsola.github.io",
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={shareKakao}
      style={{
        backgroundColor: "#FEE500",
        color: "#000",
        border: "none",
        borderRadius: "8px",
        padding: "12px 20px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        marginBottom:"30px"
      }}
    >
      💛 카카오톡으로 공유하기
    </button>
  );
}

export default ShareButton;