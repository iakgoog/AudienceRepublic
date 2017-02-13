<template>
  <div class="modal fade" id="register-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-backdrop="static" data-keyboard="false">
      <div class="modal-logo">
          <span>Powered by</span>
          <img class="" src="../assets/audienceW.svg" alt="">
      </div>
      <div class="modal-dialog" role="document">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <img src="../assets/x.svg" alt="">
          </button>
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel">Beyond the Valley</h4>
              </div>
              <div class="modal-body">
                  <div id="register-form">
                      <div class="form-title-box big-form-title">
                          <h4 class="form-title">Register for the Presale</h4>
                          <h4 class="form-title">Share with friends</h4>
                          <h4 class="form-title">Invite your friends</h4>
                          <h4 class="form-title">Connect your social accounts</h4>
                          <h4 class="form-title">Follow Beyond the Valley</h4>
                      </div>
                      <form class="" action="" method="post">
                          <ul id="progressbar">
                              <li class="active"></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                          </ul>

                          <div class="form-content">
                              <div class="form-title-box small-form-title">
                                  <h4 class="form-title">Register for the Presale</h4>
                                  <h4 class="form-title">Share with friends</h4>
                                  <h4 class="form-title">Invite your friends</h4>
                                  <h4 class="form-title">Connect your social accounts</h4>
                                  <h4 class="form-title">Follow Beyond the Valley</h4>
                              </div>
                              <fieldset class="form-page">
                                  <h5 class="form-text email-hide">Register your details & earn points to unlock highly limited presale tickets.</h5>
                                  <div class="form-group email-hide">
                                      <label for="" class="section-title">Please confirm location and date</label>
                                      <select class="selectpicker">
                                          <option>Sydney 26 Jan, 2017</option>
                                          <option>Sydney 27 Jan, 2017</option>
                                          <option>Sydney 28 Jan, 2017</option>
                                          <option>Sydney 29 Jan, 2017</option>
                                          <option>Sydney 30 Jan, 2017</option>
                                      </select>
                                  </div>
                                  <hr class="border-short email-hide"/>
                                  <a class="btn btn-default social-btn facebook-btn next email-hide" href="#" role="button">
                                      <i class="fa fa-facebook social-icon" aria-hidden="true"></i>
                                      <p class="social-text">
                                          <span class="social-msg">Register with</span><br/>
                                          <span class="social-name">Facebook</span>
                                      </p>
                                      <p class="social-pts">Earn 10 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn email-btn email-hide" href="#" role="button">
                                      <i class="fa fa-envelope social-icon" aria-hidden="true"></i>
                                      <p class="social-text">
                                          <span class="social-msg">Register with</span><br/>
                                          <span class="social-name">Email</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <hr class="border-short short-hight email-hide"/>
                                  <a class="help-link email-hide" href="">Learn more about how the presale works</a>

                                  <h5 class="email-login">Please enter your details</h5>
                                  <div class="email-login form-group">
                                      <label for="" class="login-label">Email</label>
                                      <input class="form-control login-input" type="text" name="" placeholder="">
                                  </div>
                                  <div class="email-login form-group">
                                      <label for="" class="login-label">First Name</label>
                                      <input class="form-control login-input" type="text" name="">
                                  </div>
                                  <div class="email-login form-group">
                                      <label for="" class="login-label">Last Name</label>
                                      <input class="form-control login-input" type="text" name="">
                                  </div>
                                  <p class="email-login terms">By continuing I agree to the <a href="">Terms and Conditions</a>, <a href="">Privacy Policy</a> and <a href="">Terms of Service</a></p>
                                  <hr class="email-login border-long"/>
                                  <div class="email-login form-bottom-btn">
                                      <button type="button" class="btn btn-default form-btn  next email-login">Register</button>
                                  </div>
                              </fieldset>

                              <fieldset class="form-page margin-top">
                                  <a class="btn btn-default social-btn facebook-btn" href="#" role="button">
                                      <i class="fa fa-facebook social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Share on</span>
                                              <span>You shared on</span>
                                          </span><br/>
                                          <span class="social-name">Facebook</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn twitter-btn" href="#" role="button">
                                      <i class="fa fa-twitter social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Share on</span>
                                              <span>You shared on</span>
                                          </span><br/>
                                          <span class="social-name">Twitter</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <hr class="border-long"/>
                                  <div class="form-bottom-btn">
                                      <div class="user-pts pull-left">
                                          <img src="../assets/u1.png" alt="">
                                          <p class="use-pts-text">
                                              <span class="use-pts-name">Daniel</span><br/>
                                              <span class="use-total-pts">10 pts</span>
                                          </p>
                                      </div>
                                      <a class="btn btn-default form-btn pull-right next" href="#" role="button">
                                          Continue
                                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                      </a>
                                  </div>
                              </fieldset>

                              <fieldset class="form-page margin-bottom">
                                  <p class="form-tip">Earn +10 points for each friend that registers</p>
                                  <div class="form-group">
                                      <label for="" class="section-title">Share your link</label>
                                      <div class="input-group copy-text">
                                          <input class="form-control" type="text" name="" value="https://arep.co/S4eWo1">
                                          <a class="btn btn-default input-group-btn" href="">
                                              <span>Copy</span>
                                              <i class="fa fa-share" aria-hidden="true"></i>
                                          </a>
                                      </div>

                                  </div>
                                  <div class="form-or">
                                      <span>or</span>
                                  </div>
                                  <div class="form-group big-email-btn">
                                      <label for="" class="section-title">Invite by email</label>
                                      <!--<textarea class="form-control" name="name" rows="8" cols="80" placeholder="Enter friends email address"></textarea>-->
                                      <input class="form-control" type="text" name="" placeholder="Enter friends email address">
                                      <button class="btn btn-default form-email-btn" type="submit">Send invites</button>
                                  </div>
                                  <div class="form-group small-email-btn">
                                      <button class="btn btn-default form-email-btn" type="submit">Invite friends by Email</button>
                                  </div>
                                  <hr class="border-long"/>
                                  <div class="form-bottom-btn">
                                      <div class="user-pts pull-left">
                                          <img src="../assets/u1.png" alt="">
                                          <p class="use-pts-text">
                                              <span class="use-pts-name">Daniel</span><br/>
                                              <span class="use-total-pts">10 pts</span>
                                          </p>
                                      </div>
                                      <a class="btn btn-default form-btn pull-right next" href="#" role="button">
                                          Continue
                                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                      </a>
                                  </div>
                              </fieldset>

                              <fieldset class="form-page margin-top margin-bottom">
                                  <a class="btn btn-default social-btn facebook-btn liked" href="#" role="button">
                                      <i class="fa fa-facebook social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Connect with</span>
                                              <span>You connected</span>
                                          </span><br/>
                                          <span class="social-name">Facebook</span>
                                      </p>
                                      <p class="social-pts">Earn 20 pts</p>
                                      <p class="social-pts  after-like">You earned 20 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn twitter-btn" href="#" role="button">
                                      <i class="fa fa-twitter social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Connect with</span>
                                              <span>You connected</span>
                                          </span><br/>
                                          <span class="social-name">Twitter</span>
                                      </p>
                                      <p class="social-pts">Earn 20 pts</p>
                                      <p class="social-pts  after-like">You earned 20 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn instagram-btn" href="#" role="button">
                                      <i class="fa fa-instagram social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Connect with</span>
                                              <span>You connected</span>
                                          </span><br/>
                                          <span class="social-name">Instagram</span>
                                      </p>
                                      <p class="social-pts">Earn 20 pts</p>
                                      <p class="social-pts  after-like">You earned 20 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn spotify-btn" href="#" role="button">
                                      <i class="fa fa-spotify social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Connect with</span>
                                              <span>You connected</span>
                                          </span><br/>
                                          <span class="social-name">Spotify</span>
                                      </p>
                                      <p class="social-pts">Earn 20 pts</p>
                                      <p class="social-pts  after-like">You earned 20 pts</p>
                                  </a>
                                  <p class="buttom-line">
                                      Connect with Amplifi, Beyond the Valley's event marketing platform, so we can better understand you.
                                  </p>
                                  <hr class="border-long"/>
                                  <div class="form-bottom-btn">
                                      <div class="user-pts pull-left">
                                          <img src="../assets/u1.png" alt="">
                                          <p class="use-pts-text">
                                              <span class="use-pts-name">Daniel</span><br/>
                                              <span class="use-total-pts">10 pts</span>
                                          </p>
                                      </div>
                                      <a class="btn btn-default form-btn pull-right next" href="#" role="button">
                                          Continue
                                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                      </a>
                                  </div>
                              </fieldset>

                              <fieldset class="form-page margin-top margin-bottom">
                                  <a class="btn btn-default social-btn facebook-btn" href="#" role="button">
                                      <i class="fa fa-facebook social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Like us on</span>
                                              <span>You liked us on</span>
                                          </span><br/>
                                          <span class="social-name">Facebook</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn twitter-btn liked" href="#" role="button">
                                      <i class="fa fa-twitter social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Follow us on</span>
                                              <span>You following us on</span>
                                          </span><br/>
                                          <span class="social-name">Twitter</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn instagram-btn" href="#" role="button">
                                      <i class="fa fa-instagram social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Follow us on</span>
                                              <span>You following us on</span>
                                          </span><br/>
                                          <span class="social-name">Instagram</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn soundcloud-btn" href="#" role="button">
                                      <i class="fa fa-soundcloud social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Follow us on</span>
                                              <span>You following us on</span>
                                          </span><br/>
                                          <span class="social-name">Soundcloud</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn snapchat-btn" href="#" role="button">
                                      <img class="social-icon" src="../assets/ghost.svg" alt="">
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Follow us on</span>
                                              <span>You following us on</span>
                                          </span><br/>
                                          <span class="social-name">Snapchat</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <h4 class="sponsors-title">Follow our sponsors</h4>
                                  <a class="btn btn-default social-btn facebook-btn" href="#" role="button">
                                      <i class="fa fa-facebook social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Like Smirnoff on</span>
                                              <span>You liked Smirnoff on</span>
                                          </span><br/>
                                          <span class="social-name">Facebook</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <a class="btn btn-default social-btn twitter-btn" href="#" role="button">
                                      <i class="fa fa-twitter social-icon" aria-hidden="true"></i>
                                      <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                      <p class="social-text">
                                          <span class="social-msg">
                                              <span>Follow Smirnoff on</span>
                                              <span>You following Smirnoff on</span>
                                          </span><br/>
                                          <span class="social-name">Twitter</span>
                                      </p>
                                      <p class="social-pts">Earn 5 pts</p>
                                      <p class="social-pts  after-like">You earned 5 pts</p>
                                  </a>
                                  <hr class="border-long"/>
                                  <div class="form-bottom-btn">
                                      <div class="user-pts pull-left">
                                          <img src="../assets/u1.png" alt="">
                                          <p class="use-pts-text">
                                              <span class="use-pts-name">Daniel</span><br/>
                                              <span class="use-total-pts">10 pts</span>
                                          </p>
                                      </div>
                                      <a class="btn btn-default form-btn pull-right end" href="#" role="button">
                                          Continue
                                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                      </a>
                                  </div>
                              </fieldset>
                          </div>
                      </form>
                  </div>

                  <div id="registered">
                      <div class="successful-msg">
                          <div class="total-pts">
                              <div class="user-img-big">
                                  <img src="../assets/u1.png" alt="">
                                  <i class="fa fa-check" aria-hidden="true"></i>
                              </div>
                              <h4>Daniel S.</h4>
                              <span>Entry total: <b>75 pts</b></span>
                              <h3>You've successfully registered for presale tickets!</h3>
                          </div>
                          <div class="more-pts">
                              <p>If successful, you'll receive an email from 8:00 AM on Wednesday November 9th with your URL to purchase tickets.</p>
                              <p><b>You're currently in the top 20%.</b> Increase your chances of winning by earning more points.</p>
                              <a class="btn btn-default round-btn more-point" href="#" role="button">Earn more points</a>
                              <button type="button" class="btn btn-default round-btn close-btn" data-dismiss="modal">Back to the event page</button>
                          </div>
                      </div>

                      <div class="social-links">
                          <div class="popup-title">
                              <h4>Connect your social channels</h4>
                          </div>
                          <div class="social-link-box">
                              <a class="btn btn-default social-btn facebook-btn" href="#" role="button">
                                  <i class="fa fa-facebook social-icon" aria-hidden="true"></i>
                                  <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                  <p class="social-text">
                                      <span class="social-msg">
                                          <span>Connect with</span>
                                          <span>You connected</span>
                                      </span><br/>
                                      <span class="social-name">Facebook</span>
                                  </p>
                                  <p class="social-pts">Earn 20 pts</p>
                                  <p class="social-pts  after-like">You earned 20 pts</p>
                              </a>
                              <a class="btn btn-default social-btn twitter-btn" href="#" role="button">
                                  <i class="fa fa-twitter social-icon" aria-hidden="true"></i>
                                  <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                  <p class="social-text">
                                      <span class="social-msg">
                                          <span>Connect with</span>
                                          <span>You connected</span>
                                      </span><br/>
                                      <span class="social-name">Twitter</span>
                                  </p>
                                  <p class="social-pts">Earn 20 pts</p>
                                  <p class="social-pts  after-like">You earned 20 pts</p>
                              </a>
                              <a class="btn btn-default social-btn instagram-btn" href="#" role="button">
                                  <i class="fa fa-instagram social-icon" aria-hidden="true"></i>
                                  <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                  <p class="social-text">
                                      <span class="social-msg">
                                          <span>Connect with</span>
                                          <span>You connected</span>
                                      </span><br/>
                                      <span class="social-name">Instagram</span>
                                  </p>
                                  <p class="social-pts">Earn 20 pts</p>
                                  <p class="social-pts  after-like">You earned 20 pts</p>
                              </a>
                              <a class="btn btn-default social-btn spotify-btn" href="#" role="button">
                                  <i class="fa fa-spotify social-icon" aria-hidden="true"></i>
                                  <img class="social-icon after-like" src="../assets/tick.svg" alt="">
                                  <p class="social-text">
                                      <span class="social-msg">
                                          <span>Connect with</span>
                                          <span>You connected</span>
                                      </span><br/>
                                      <span class="social-name">Spotify</span>
                                  </p>
                                  <p class="social-pts">Earn 20 pts</p>
                                  <p class="social-pts  after-like">You earned 20 pts</p>
                              </a>
                              <p class="buttom-line">
                                  Connect with Audience Republic, Beyond the Valley's event marketing platform, so we understand a bit more about you.
                              </p>
                          </div>
                          <div class="done-btn-box">
                              <a class="btn btn-default round-btn done-btn" href="#" role="button">Done</a>
                          </div>
                      </div>

                      <div class="total-summary">
                          <div class="popup-title">
                              <h4>Your entry</h4>
                              <button type="button" class="mobile-close" data-dismiss="modal" aria-label="Close"><img src="../assets/xBB.svg" alt=""></button>
                          </div>
                          <div class="user-details">
                              <div class="user-img-big">
                                  <img src="../assets/u1.png" alt="">
                              </div>
                              <h4>Daniel S.</h4>
                              <span>Entry total: <b>75 pts</b></span>
                              <p class="logout">Not you? <a href="">Logout</a></p>
                              <h4>You're in the top 20%</h4>
                              <p class="">Increase your chances of winning by earning more points.</p>
                          </div>
                          <div class="point-details">
                              <a class="btn btn-default" href="" role="button">
                                  <p class="point-name"><span>Share with friends</span></p>
                                  <p class="point-count count-one">5 <i> of </i> 10 pts</p>
                                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              </a>
                              <a class="btn btn-default" href="" role="button">
                                  <p class="point-name"><span>Invite friends</span></p>
                                  <p class="point-count  count-two">0 pts</p>
                                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              </a>
                              <a class="btn btn-default" href="" role="button">
                                  <p class="point-name"><span>Connect with us</span></p>
                                  <p class="point-count  count-one">60 <i> of </i> 80 pts</p>
                                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              </a>
                              <a class="btn btn-default" href="" role="button">
                                  <p class="point-name"><span>Follow us</span></p>
                                  <p class="point-count  count-two">0 <i> of </i> 35 pts</p>
                                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              </a>
                          </div>
                      </div>
                  </div>


              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log('created from Modal.vue')
    // $(this.$el).modal('show')
  }
}
</script>
