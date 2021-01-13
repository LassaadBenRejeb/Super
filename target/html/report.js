$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FeatureSuperHeroProject.feature");
formatter.feature({
  "name": "SuperHero",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "SuperHero",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the home page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.the_home_page_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the checkbox \"I agree to the Superhero\"",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_select_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Generate New Wallet\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Skip\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Generate Wallet\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the extension chrome is \"installed\"",
  "keyword": "And "
});
formatter.match({
  "location": "Home.the_extension_chrome_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the checkbox \"I understand that this is a cryptocurrency wallet and I am responsible for backing up my account recovery seed phrase.\"",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_select_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Proceed to your Wallet\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \" My Profile \" in the left menu",
  "keyword": "When "
});
formatter.match({
  "location": "Home.i_click_on_in_the_left_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page \"user-profil\" is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "Diversity.the_page_is_opened(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button of \"Change Cover Photo\"",
  "keyword": "When "
});
formatter.match({
  "location": "Diversity.i_click_on_the_button_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I upload the photo \"ITTest.png\"",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.i_upload_the_photo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the photo is uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "Profile.the_photo_is_uploaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button of \"Edit Profile\"",
  "keyword": "When "
});
formatter.match({
  "location": "Diversity.i_click_on_the_button_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Test\" in \"Edit Biography\"",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_enter_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button of \"Save\"",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_the_button_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the value of profile description is \"Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Profile.the_value_of_profile_description_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"  a knock-out punch to those asshole bosses whose cluelessness continues to harm both their employees and the overall organisation. \" in \"Search Superhero\"",
  "keyword": "When "
});
formatter.match({
  "location": "Diversity.i_enter_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the video finded is \"#OldGold #Must #goodread a knock-out punch to those asshole bosses whose cluelessness continues to harm both their employees and the overall organisation.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.the_video_finded_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button of comment",
  "keyword": "When "
});
formatter.match({
  "location": "Home.i_click_on_button_of_comment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"comment test\" in \"Add reply\"",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_enter_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button of \"Reply\"",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_the_button_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the comment is added",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.the_comment_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a reply to a comment",
  "keyword": "When "
});
formatter.match({
  "location": "Home.i_add_a_reply_to_a_comment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the replay is added",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.the_replay_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I disallow cookies from 3rd party providers",
  "keyword": "When "
});
formatter.match({
  "location": "Diversity.i_disallow_cookies_from_rd_party_providers(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I refresh the page",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.iRefreshThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"youtube\" in \"Search Superhero\"",
  "keyword": "When "
});
formatter.match({
  "location": "Diversity.i_enter_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all post finded are from youtube",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.all_post_finded_are_from_youtube()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"button-plain play play-button\" button of first video",
  "keyword": "When "
});
formatter.match({
  "location": "Diversity.i_click_on_button_of_first_video(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Allow YouTube button",
  "keyword": "And "
});
formatter.match({
  "location": "Home.iClickOnAllowYouTubeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"button-plain play play-button\" button of first video",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_button_of_first_video(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"ytp-large-play-button ytp-button\" button of first video",
  "keyword": "And "
});
formatter.match({
  "location": "Diversity.i_click_on_button_of_first_video(String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\r\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\r\n\tat java.base/java.util.Objects.checkIndex(Objects.java:372)\r\n\tat java.base/java.util.ArrayList.get(ArrayList.java:459)\r\n\tat superhero.page.DiversityPage.i_click_on_button_of_first_video(DiversityPage.java:92)\r\n\tat superhero.stepDefinition.Diversity.i_click_on_button_of_first_video(Diversity.java:48)\r\n\tat ✽.I click on \"ytp-large-play-button ytp-button\" button of first video(file:src/test/resources/features/FeatureSuperHeroProject.feature:47)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the video is played",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.the_video_is_played()"
});
formatter.result({
  "status": "skipped"
});
});