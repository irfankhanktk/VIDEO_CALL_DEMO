import React, {useState} from 'react';
import AgoraUIKit, {VideoRenderMode, PropsInterface} from 'agora-rn-uikit';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: PropsInterface = {
    rtcProps: {
      appId: '95dacba385d74d90aea75603b6ca9baa',
      channel: 'Khan',
      token:'00695dacba385d74d90aea75603b6ca9baaIAAf1CKGQD22CDEORg8DxYeZVf5/y4nZl14FF7uGC5VYEwGMef0AAAAAEAD3dRUD6nOGYQEAAQDlc4Zh',
    },
    styleProps: {
      iconSize: 30,
      theme: '#ffffffee',
      videoMode: {
        max: VideoRenderMode.Hidden,
        min: VideoRenderMode.Hidden,
      },
      overlayContainer: {
        backgroundColor: '#2edb8533',
        opacity: 1,
      },
      localBtnStyles: {
        muteLocalVideo: btnStyle,
        muteLocalAudio: btnStyle,
        switchCamera: btnStyle,
        endCall: {
          borderRadius: 0,
          width: 50,
          height: 50,
          backgroundColor: '#f66',
          borderWidth: 0,
        },
      },
      localBtnContainer: {
        backgroundColor: '#fff',
        bottom: 0,
        paddingVertical: 10,
        borderWidth: 4,
        borderColor: '#2edb85',
        height: 80,
      },
      maxViewRemoteBtnContainer: {
        top: 0,
        alignSelf: 'flex-end',
      },
      remoteBtnStyles: {
        muteRemoteAudio: remoteBtnStyle,
        muteRemoteVideo: remoteBtnStyle,
        remoteSwap: remoteBtnStyle,
        minCloseBtnStyles: remoteBtnStyle,
      },
      minViewContainer: {
        bottom: 80,
        top: undefined,
        backgroundColor: '#fff',
        borderColor: '#2edb85',
        borderWidth: 4,
        height: '26%',
      },
      minViewStyles: {
        height: '100%',
      },
      maxViewStyles: {
        height: '64%',
      },
      UIKitContainer: {height: '94%'},
    },
    callbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return (
    <SafeAreaView>
      <Text style={textStyle}>Agora UI Kit Demo</Text>
      {videoCall ? (
        <>
          <AgoraUIKit
            styleProps={props.styleProps}
            rtcProps={props.rtcProps}
            callbacks={props.callbacks}
          />
        </>
      ) : (
        <TouchableOpacity
          style={startButton}
          onPress={() => setVideoCall(true)}>
          <Text style={{...textStyle, width: '50%'}}>Start Call</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const textStyle = {
  color: '#fff',
  backgroundColor: '#2edb85',
  fontWeight: '700',
  fontSize: 24,
  width: '100%',
  borderColor: '#2edb85',
  borderWidth: 4,
  textAlign: 'center',
  textAlignVertical: 'center',
};

const btnStyle = {
  borderRadius: 2,
  width: 40,
  height: 40,
  backgroundColor: '#2edb85',
  borderWidth: 0,
};

const startButton = {
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  height: '90%',
};

const remoteBtnStyle = {backgroundColor: '#2edb8555'};

export default App;
