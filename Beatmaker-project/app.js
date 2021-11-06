class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll('.pad');
    this.playBtn = document.querySelector('.play');
    this.currentKick = '.sounds/kick-classic.wav';
    this.currentSnare = './sounds/snare-acoustic01.wav';
    this.currentHihat = './sounds/hihat-808.wav';
    this.kickAudio = document.querySelector('.kick-sound');
    this.snareAudio = document.querySelector('.snare-sound');
    this.hihatkAudio = document.querySelector('.hihat-sound');
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll('select');
    this.muteBtns = document.querySelectorAll('.mute');
    this.tempoSlider = document.querySelector('.tempo-slider');
  }
  activePad() {
    this.classList.toggle('active');
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    activeBars.forEach(bar => {
        bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
        // Check if pads are active
        if(bar.classList.contains('active')) {
          // Check each sound
          if(bar.classList.contains('kick-pad')) {
            this.kickAudio.currentTime = 0;
            this.kickAudio.play();
          }
          if(bar.classList.contains('snare-pad')) {
            this.snareAudio.currentTime = 0;
            this.snareAudio.play();
          }
          if(bar.classList.contains('hihat-pad')) {
            this.hihatkAudio.currentTime = 0;
            this.hihatkAudio.play();
          }
        }
    }); 
    console.log(step);
    this.index++;
  }
  start() {
    const interval = (60/this.bpm) * 1000;
    // Check if playing
    if(this.isPlaying) {
      //Clear interval
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }
  updateBtn() {
    if(!this.isPlaying) {
      this.playBtn.innerHTML = 'Stop';
      this.playBtn.classList.add('active');
    }else {
      this.playBtn.innerHTML = 'Play';
      this.playBtn.classList.remove('active');
    }
  }
  changeSound(event) {
    const selectName = event.target.name;
    const selectValue = event.target.value;
    switch(selectName) {
      case 'kick-select':
        this.kickAudio.src = selectValue;
        break;
      case 'snare-select':
        this.snareAudio.src = selectValue;
        break;
      case 'hihat-select':
        this.hihatkAudio.src = selectValue;
        break;
    }
  }
  mute(event) {
    const muteIndex = event.target.getAttribute('data-track');
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){
      switch(muteIndex) {
        case '0':
          this.kickAudio.volume = 0;
          break;
        case '1':
          this.snareAudio.volume = 0;
          break;
        case '2':
          this.hihatkAudio.volume = 0;
          break;
      }
    }else {
      switch(muteIndex) {
        case '0':
          this.kickAudio.volume = 1;
          break;
        case '1':
          this.snareAudio.volume = 1;
          break;
        case '2':
          this.hihatkAudio.volume = 1;
          break;
      }
    }
  }
  changeTempo(event) {
      const tempoText = document.querySelector('.tempo-nr');
      tempoText.innerText = event.target.value;
  }
  updateTempo(event) {
    this.bpm = event.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playBtn = document.querySelector('.play');
    if(playBtn.classList.contains('active')) {
      this.start();
      console.log(playBtn);
    }
  }
}

const drumKit = new DrumKit();

// Event Listeners
drumKit.pads.forEach(pad => {
  pad.addEventListener('click', drumKit.activePad);
  pad.addEventListener('animationend', function() {
    this.style.animation = '';
  });
});

drumKit.playBtn.addEventListener('click', function() {
  drumKit.updateBtn();
  drumKit.start();
});

drumKit.selects.forEach(select => {
  select.addEventListener('change', function(event) {
    drumKit.changeSound(event);
  });
});
drumKit.muteBtns.forEach(btn => {
  btn.addEventListener('click', function(event) {
    drumKit.mute(event);
  })
});

drumKit.tempoSlider.addEventListener('input', function(event) {
  drumKit.changeTempo(event);
});
drumKit.tempoSlider.addEventListener('change', function(event) {
  drumKit.updateTempo(event);
})
