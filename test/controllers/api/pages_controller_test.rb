require "test_helper"

class Api::PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pages_index_url
    assert_response :success
  end

  test "should get show" do
    get api_pages_show_url
    assert_response :success
  end

  test "should get new" do
    get api_pages_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_pages_edit_url
    assert_response :success
  end
end
