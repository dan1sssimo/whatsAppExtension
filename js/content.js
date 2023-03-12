setTimeout(function extention() {
    if ($('.lhggkp7q.ln8gz9je.rx9719la').length>0) {
        setTimeout(startPage, 3000);
        setTimeout(displayFunctionStart, 3000);
        setTimeout(loadStartButtons, 3000);
        setTimeout(replyFunctionStart, 3000);
        setTimeout(getContact, 3500);
        setTimeout(getNotContact, 4500)
        setTimeout(addCustomLabelsToChats, 6000);
        setTimeout(loadChatToNotContact, 3500)
        setTimeout(clickOnFilter, 5000)
        setTimeout(getLabelsFromSite, 2000)

        function setItemInStorage(object) {
            return localStorage.setItem('chatTopic', JSON.stringify(object))
        }

        function getItemFromStorage() {
            let obj = localStorage.getItem('chatTopic')
            return JSON.parse(obj)
        }

        function setDisplayInStorage(object) {
            return localStorage.setItem('displayTopic', JSON.stringify(object))
        }

        function getDisplayFromStorage() {
            let obj = localStorage.getItem('displayTopic')
            return JSON.parse(obj)
        }

        function addReplyToStorage(object) {
            return localStorage.setItem('replyStorage', JSON.stringify(object))
        }

        function getReplyFromStorage() {
            let obj = localStorage.getItem('replyStorage')
            return JSON.parse(obj)
        }

        function checkBusinessAccount() {
            $('.typeAcc').remove()
            if ($('.typeAcc').length == 0) {
                $('._21nHd').click()
                setTimeout(function () {
                    if ($(`${('._2vQWV p357zi0d gndfcl4n k45dudtp bcymb0na').replaceAll(' ', '.')}`).length > 0) {
                        $('._18eKe').click()
                        $('._21nHd').append(`<p class="typeAcc">Business Account</p>`)
                    } else {
                        $('._18eKe').click()
                        $('._21nHd').append(`<p class="typeAcc">Default Account</p>`)
                    }
                }, 1)
            }

        }

        function addCustomLabelsToChats() {
            if ($('.lhggkp7q.ln8gz9je.rx9719la').length > 0) {

                if ($('.topicLabelInChat').length > 0) {
                    $('.topicLabelInChat').remove()
                }
                if ($('.topicsListInChatDrop').length > 0) {
                    $('.topicsListInChatDrop').remove()
                }
                let notReadElement = ["all", "unread", "unreplied", "contact", "notcontact"]
                let chatsHTML = $('.lhggkp7q.ln8gz9je.rx9719la')
                let allChatList = getItemFromStorage()
                let objectKey = Object.keys(allChatList)
                chatsHTML.each((index, element) => {
                    let i = 0
                    let chatName = element.querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')
                        .getAttribute("title")
                    let blockToAppend = $(element)
                    objectKey.forEach((element) => {
                        let nameTopic = element
                        if (!notReadElement.includes(element))
                            if (allChatList[element].includes(chatName)) {
                                if (blockToAppend.get(0).querySelector('.topicLabelInChat') == null) {
                                    blockToAppend.find('._21S-L').after(`<p class="topicLabelInChat">${nameTopic}</p>`)
                                } else {
                                    if (blockToAppend.get(0).querySelector('.topicsListInChatDrop') == null) {
                                        blockToAppend.find('.topicLabelInChat').after(`<div class="dropdown topicsListInChatDrop" style="margin-left: 5px;position: relative;z-index: 10000">
                          <button class="btn btn-secondary dropdown-toggle btnTopicsNumber" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            5
                          </button>
                          <ul class="dropdown-menu dropdownTopicListChat" aria-labelledby="dropdownMenuButton1" style="position: absolute;
                              z-index:  100;
                              top:      45px;
                              padding: 0px;
                              width:    50px;
                              height:   26px;
                              font-size: 15px;
                              list-style-type: none;
                              max-height: 240px;
                              overflow-y: scroll;
                              ">
                          </ul>
                        </div>`)
                                    }
                                    blockToAppend.find('.btnTopicsNumber').text("+" + `${++i}`)
                                    blockToAppend.find('.dropdownTopicListChat').append(` <li ><a class="dropdown-item" style="height: 26px;">${nameTopic}</a></li>`)
                                }
                            }
                    })

                })
            }
            setTimeout(addCustomLabelsToChats, 10000)
        }

        function loadChatToNotContact() {
            if ($('.callPhoneNum').length > 0)
                $('.callPhoneNum').remove()
            $(`${('.g0rxnol2 ercejckq cm280p3y p357zi0d gndfcl4n kcgo1i74 ln8gz9je e8h85j61 emrlamx0 aiput80m lyvj5e2u l9g3jx6n f6ipylw5').replaceAll(' ', '.')}`).append(`<div style="position: relative;z-index: 100000"><a class="nav-link dropdown-toggle callPhoneNum" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Start a Chat
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="navBarList">
           <li class="dropdown-header" style="width: 500px">
                 <div class="input-group mb-3">
                  <input type="number" class="form-control" placeholder="type number ( 380983662211 )"  id="phoneNumberToChat">
                  <button class="btn btn-outline-secondary" type="button" id="startNewChat">Start</button>
                </div>
            </li>
            </ul></div>`)
        }

        function loadStartButtons() {

            $('#testTest').remove()
            let allChatList = getItemFromStorage()
            let topicName = Object.keys(allChatList)
            let tmpIndex = 0
            $('body').prepend(`<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="testTest" style="height: 50px">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 allChatsList">
       
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`)
            topicName.forEach((element) => {
                $('.allChatsList').append(`<li class="nav-item">
          <a class="nav-link topicButtons active" id="${element.replaceAll(' ', '_')}">${element.charAt(0).toUpperCase() + element.slice(1)}</a>
        </li>`)
            })
            $('.allChatsList').append(`
            <span class="navbar-text d-flex justify-content-end" id="topicSettings">
                    Settings
                  </span>
        `)
            let allTopicsObject = getDisplayFromStorage()
            let visibleList = Object.keys(allTopicsObject)
            visibleList.forEach((element) => {
                if (allTopicsObject[element.replaceAll('_', ' ')] == "0") {
                    $('.allChatsList').get(0).querySelector(`#${element.replaceAll(" ", "_")}`).style.display = "none"
                    allTopicsObject[element.replaceAll('_', ' ')] = "1"
                } else {
                    $('.allChatsList').get(0).querySelector(`#${element.replaceAll(" ", "_")}`).style.display = "flex"
                    allTopicsObject[element.replaceAll('_', ' ')] = "0"
                }
            })
            let paddingTop = $('#testTest').height()
            $('#app').css("padding-top", `${paddingTop + paddingTop}px`)
        }

        $(document).on('click', '#startNewChat', function () {
            let phoneNumber = $('#phoneNumberToChat').val()
            window.location.href = `/send?phone=${phoneNumber}`
        })


        $(document).on('click', '.topicButtons', function () {
            if ($(this).hasClass('labelButton')) {
                return false;
            }
            let topicName = $(this).text().toLowerCase()
            let allChatList = getItemFromStorage()
            allChatList = allChatList[topicName]
            let chatsHTML = $('.lhggkp7q.ln8gz9je.rx9719la').get()
            chatsHTML.forEach((element) => {
                let elm = element.querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')
                    .getAttribute("title")
                if (!allChatList.includes(elm)) {
                    if (!$(element).hasClass('d-none')) {
                        $(element).addClass('d-none');
                    }
                } else {
                    if ($(element).hasClass('d-none')) {
                        $(element).removeClass('d-none');
                    }
                }
            });
            redrawChats();
        })

        function createSettingsMenu() {
            let notEditedDeleted = ["all", "unread", "unreplied", "contact", "notcontact"]
            let allTopicsObject = getItemFromStorage()
            let topicName = Object.keys(allTopicsObject)
            $('body').append('<div class="d-flex justify-content-end boxSettings" style="margin-top: 50px">' +
                '<div class="card" style="width: 18rem;z-index: 100000; position: absolute">\n' +
                '  <div class="card-body">\n' +
                '    <div class="input-group">\n' +
                '  <span class="input-group-text" style="width: 85%">Topics List</span>\n' +
                '  <button type="button" class="btn btn-secondary form-control" id="closeTopicList">\n' +
                '                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n' +
                '  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n' +
                '</svg>\n' +
                '              </button>\n' +
                '</div>\n' +
                '                                   ' +
                '<ul class="list-group topicsItems" style=" list-style-type: none;\n' +
                '      max-height: 240px;\n' +
                '      overflow-y: scroll">\n' +
                '</ul>' +
                // '<div class="input-group mb-3" >\n' +
                // '  <input type="text" minlength="1" class="form-control" id="newTopicInput" placeholder="new topic">\n' +
                // '  <button class="btn btn-outline-secondary" type="button" id="topicSettingsButton">ADD</button>\n' +
                // '</div>' +
                '  </div>\n' +
                '</div>' +
                '</div>')
            topicName.forEach((element) => {
                $('.topicsItems').append(`<li class="list-group-item ${element.replaceAll(' ', '_')}" style=" height: 60px;">
                <div class="input-group mb-3">
                <input class="form-control editTopic" placeholder="new topic" id="${element.replaceAll(' ', '_')}" value="${element}" readonly><button type="button" class="btn btn-secondary topicVisible">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
</svg>
              </button>
                </div></li>`)
            })
        }

        $(document).on('click', '#closeTopicList', function () {
            $('.boxSettings').remove()
        })

        $(document).on('click', '#closeReplyList', function () {
            $('.quickReplyBox').remove()
        })

        $(document).on('click', '#topicSettings', function () {
            $('.boxSettings').remove()
            createSettingsMenu()
        })

        $(document).on('click', '#topicSettingsButton', function () {
            let newTopicName = $('#newTopicInput').val()
            let allTopicsObject = getItemFromStorage()
            let allVisibleObject = getDisplayFromStorage()
            if (newTopicName.length > 0) {
                if (allTopicsObject[newTopicName] === undefined) {
                    allVisibleObject[newTopicName] = "1"
                    allTopicsObject[newTopicName] = []
                    setItemInStorage(allTopicsObject)
                    setDisplayInStorage(allVisibleObject)
                    $('.topicsItems').append(`<li class="list-group-item ${newTopicName}">
                <div class="input-group mb-3" >
                <input class="form-control editTopic" placeholder="new topic" value="${newTopicName}" id="${newTopicName}"><button type="button" class="btn btn-secondary topicVisible">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
</svg>
              </button></div></li>`)
                    $(`.allChatsList`).remove()
                    loadStartButtons()
                }
            }
            $('#newTopicInput').val('')

        })

        $(document).on('click', '.deleteTopic', function () {
            let topicName = $(this).attr('id')
            topicName = topicName.replaceAll('_', ' ')
            let allTopicsObject = getItemFromStorage()
            let allVisibleObject = getDisplayFromStorage()
            delete allVisibleObject[topicName]
            delete allTopicsObject[topicName]
            setDisplayInStorage(allVisibleObject)
            setItemInStorage(allTopicsObject)
            $(`.${topicName.replaceAll(' ', '_')}`).remove()
            $(`.allChatsList`).remove()
            loadStartButtons()
        })

        $(document).on('click', '.deleteReplyItem', function () {
            let replyName = $(this).closest("div").get(0).querySelector('.btn.btn-outline-secondary.getReplyItem').getAttribute('id')
            let allReplyObj = getReplyFromStorage()
            delete allReplyObj[replyName]
            addReplyToStorage(allReplyObj)
            $(`.${replyName}`).remove()
        })

        $(document).on('click', '.editTopicImageButton', function () {
            let newTopicName = $(this).closest("div").get(0).querySelector('.editTopic').getAttribute('id')
            if (newTopicName.length > 0) {
                let allTopicsObject = getItemFromStorage()
                let allVisibleObject = getDisplayFromStorage()
                let oldArray = allTopicsObject[newTopicName]
                delete allVisibleObject[newTopicName]
                delete allTopicsObject[newTopicName]
                allVisibleObject[newTopicName] = "1"
                allTopicsObject[newTopicName] = oldArray
                setItemInStorage(allTopicsObject)
                setDisplayInStorage(allVisibleObject)
                $('.allChatsList').remove()
                $('.boxSettings').remove()
                loadStartButtons()
                createSettingsMenu()
            }
        })

        $(document).on('click', '.topicVisible', function () {
            let newTopicName = $(this).closest("div").get(0).querySelector('.editTopic').getAttribute('id').replaceAll('_', ' ')

            let allTopicsObject = getDisplayFromStorage()
            let topicName = Object.keys(allTopicsObject)
            topicName.forEach((element) => {
                if (newTopicName == element) {
                    if (allTopicsObject[newTopicName] == "0") {
                        $('.allChatsList').get(0).querySelector(`#${newTopicName.replaceAll(" ", "_")}`).style.display = "flex"
                        allTopicsObject[newTopicName] = "1"
                    } else {
                        $('.allChatsList').get(0).querySelector(`#${newTopicName.replaceAll(" ", "_")}`).style.display = "none"
                        allTopicsObject[newTopicName] = "0"
                    }
                }
            })
            setDisplayInStorage(allTopicsObject)
        })

        $(document).on('change', '.editTopic', function () {
            let newTopicName = $(this).val()
            let topicName = $(this).attr('id')
            if (newTopicName.length > 0) {
                let allVisibleObject = getDisplayFromStorage()
                let allTopicsObject = getItemFromStorage()
                let oldArray = allTopicsObject[topicName]
                delete allVisibleObject[topicName]
                delete allTopicsObject[topicName]
                allTopicsObject[newTopicName] = oldArray
                allVisibleObject[newTopicName] = "1"
                setDisplayInStorage(allVisibleObject)
                setItemInStorage(allTopicsObject)
                $('.allChatsList').remove()
                $('.boxSettings').remove()
                loadStartButtons()
                createSettingsMenu()
            } else {
                $(this).val($(this).attr('id'))
            }
        })

        $(document).on('click', '.lhggkp7q.ln8gz9je.rx9719la', function () {
            checkBusinessAccount()
            if ($('.form-check.form-switch').length > 0) {
                $('.form-check.form-switch').remove()
            }
            if ($('.dropChatL').length > 0) {
                $('.dropChatL').remove()
            }
            if ($('.buttonChatQui').length > 0) {
                $('.buttonChatQui').remove()
            }
            // $('._2gzeB').append(`<div class="dropdown dropChatL" style="z-index: 100000; position: absolute">
            //       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            //         Add Chat To Tab
            //       </button>
            //       <ul class="dropdown-menu tabsList" aria-labelledby="dropdownMenuButton1">
            //       </ul>
            //     </div>`)
            // $('._2gzeB').append(`<div class="d-flex justify-content-end buttonChatQui" ><button type="button" class="btn btn-secondary" style="z-index: 100000;position: absolute" id="quickReplyButton">QuickReply</button></div>`)
            $('._23P3O').append(`<div class="form-check form-switch" style="z-index: 100000;position: relative">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">OFF typing</label>
        </div>`)
            // let notAddToListTabs = ["all", "unread", "unreplied", "contact", "notcontact"]
            // let allTopicsObject = getItemFromStorage()
            // let topicName = Object.keys(allTopicsObject)
            // topicName.forEach((element) => {
            //     if (!notAddToListTabs.includes(element)) {
            //         $('.tabsList').append(`<li><a class="dropdown-item tabsItem"  id="${element}" href="#">${element}</a></li>`)
            //     }
            // })
        })

        $(document).on('change', '#flexSwitchCheckDefault', function () {
            if ($('#flexSwitchCheckDefault:checked').length > 0) {
                if ($('.p357zi0d.r15c9g6i.g4oj0cdv.ovllcyds.l0vqccxk.pm5hny62').length > 0) {
                    $('.p357zi0d.r15c9g6i.g4oj0cdv.ovllcyds.l0vqccxk.pm5hny62').css('display', 'none')
                    if ($('.vQ0w7 ._16h0X.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3._11JPr').length > 0) {
                        $('.vQ0w7 ._16h0X.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3._11JPr').css('display', 'none')
                    }
                }

            } else if ($('#flexSwitchCheckDefault:checked').length == 0) {
                if ($('.p357zi0d.r15c9g6i.g4oj0cdv.ovllcyds.l0vqccxk.pm5hny62').length > 0) {
                    $('.p357zi0d.r15c9g6i.g4oj0cdv.ovllcyds.l0vqccxk.pm5hny62').css('display', 'inherit')
                    if ($('.vQ0w7 ._16h0X.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3._11JPr').length > 0) {
                        $('.vQ0w7 ._16h0X.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3._11JPr').css('display', 'inherit')
                    }
                }
            }
        })

        $(document).on('click', '#quickReplyButton', function () {
            $('.selectable-text.copyable-text.iq0m558w').prepend(`<span className="selectable-text copyable-text" data-lexical-text="true">a</span>`)
            console.log($('.selectable-text.copyable-text.iq0m558w').text('dsadasdas'))
            $('.quickReplyBox').remove()
            let allReplyObj = getReplyFromStorage()
            let replyText = Object.keys(allReplyObj)
            $('._2gzeB').prepend(`<div class="d-flex justify-content-end quickReplyBox">
            <div class="card" style="width: 18rem;z-index: 1000000000; position: absolute">
              <div class="card-body">
                <div class="input-group">
  <span class="input-group-text" style="width: 85%">Reply List</span>
  <button type="button" class="btn btn-secondary form-control" id="closeReplyList">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
</svg>
              </button>
</div>
            <ul class="list-group quickReplyList">
          
            </ul>
            <div class="input-group mb-3" >
             <input type="text" minlength="1" class="form-control" id="newReplyInput" placeholder="enter your quick reply">
             <button class="btn btn-outline-secondary" type="button" id="addQuickReplyButton">ADD</button>
            </div>
             </div>
            </div>
            </div>`)
            replyText.forEach((element) => {
                $('.quickReplyList').append(`<li class="list-group-item ${element}">
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary getReplyItem" id="${element}" type="button">${element}</button>
              <button type="button" class="btn btn-secondary deleteReplyItem" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg>
              </button>
            </div>`)
            })
        })

        $(document).on('click', '.getReplyItem', function () {
            let message = $(this).attr('id')
            if (!$('body').hasClass('_1VZX7')) {
                $('._1VZX7').empty()
                $('._1VZX7').append(`<div tabindex="-1" class="_3Uu1_"><div class="g0rxnol2"><div class="fd365im1 to2l77zo bbv8nyr4 mwp4sxku gfz4du6o ag5g9lrv bze30y65 bdf91cm1" contenteditable="true" role="textbox" spellcheck="true" title="Напишіть повідомлення" data-testid="conversation-compose-box-input" data-tab="10" data-lexical-editor="true" style="user-select: text; white-space: pre-wrap; word-break: break-word;"><p class="selectable-text copyable-text iq0m558w" dir="ltr"><span class="selectable-text copyable-text" data-lexical-text="true">d</span></p></div></div></div>
        <div class="_2xy_p _3XKXx"><button data-testid="compose-btn-send" data-tab="11" aria-label="Надіслати" class="tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq"><span data-testid="send" data-icon="send" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span></button></div>`)
            }
            let element = document.querySelector('.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv.bze30y65.bdf91cm1')
            element.dispatchEvent(new InputEvent("input", {
                bubbles: !0,
                cancelable: !0
            }));
            console.log('dsada')

        })

        $(document).on('click', '#addQuickReplyButton', function () {
            let newReply = $('#newReplyInput').val()
            let allReplyObject = getReplyFromStorage()
            if (newReply.length > 0) {
                if (allReplyObject[newReply] === undefined) {
                    allReplyObject[newReply] = newReply
                    addReplyToStorage(allReplyObject)
                    $('.quickReplyList').append(`<li class="list-group-item ${newReply}">
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary getReplyItem" id="${newReply}" type="button">${newReply}</button>
              <button type="button" class="btn btn-secondary deleteReplyItem" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg>
              </button>
            </div>`)
                }
            }
            $('#newReplyInput').val('')

        })

        $(document).on('click', '.tabsItem', function () {
            let topicToAddChat = $(this).attr('id')
            let chatName = $('._21nHd').get(0).querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr').getAttribute('title')
            let chatObject = getItemFromStorage()
            chatObject[topicToAddChat].push(chatName)
            setItemInStorage(chatObject)

        })

        function replyFunctionStart() {
            let basicObj = {}
            let replyObj
            if (getReplyFromStorage() !== null) {
                replyObj = getReplyFromStorage()
            } else {
                localStorage.setItem('replyStorage', JSON.stringify(basicObj))
                replyObj = getReplyFromStorage()
            }
            addReplyToStorage(replyObj)
        }

        function displayFunctionStart() {
            let basicDisplayObj = {
                all: "1",
                unread: "1",
                unreplied: "1",
                contact: "1",
                notcontact: "1",
            }
            let displayObject
            if (getDisplayFromStorage() !== null) {
                displayObject = getDisplayFromStorage()
            } else {
                localStorage.setItem('displayTopic', JSON.stringify(basicDisplayObj))
                displayObject = getDisplayFromStorage()
            }
            setDisplayInStorage(displayObject)
        }

        function startPage() {
            let basicChatObj = {
                all: [],
                unread: [],
                unreplied: [],
                contact: [],
                notcontact: [],
            }
            let unreplied = []
            let unread = []
            let all = []

            let chatObject
            if (getItemFromStorage() !== null) {
                chatObject = getItemFromStorage()
            } else {
                setItemInStorage(basicChatObj)
                chatObject = getItemFromStorage()
            }


            let chatsHTML = $('.lhggkp7q.ln8gz9je.rx9719la').get()
            chatsHTML.forEach((element) => {
                let chatName = element.querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')
                    .getAttribute("title")
                all.push(chatName)
                if (element.querySelector('._1pJ9J') !== null) {
                    unread.push(chatName)
                }
                if (element.querySelector('._2qo4q') == null) {
                    unreplied.push(chatName)
                }
            })
            chatObject.all = all
            chatObject.unread = unread
            chatObject.unreplied = unreplied
            setItemInStorage(chatObject);
            // setTimeout(startPage, 5000)
        }

        var labels = {};
        var getLabelsTimeout = false;
        var getChatsTimeout = false;
        var getNotContactTimeout = false;
        var getTestTimeout = false;

        function getNotContact() {
            if (getNotContactTimeout) {
                clearTimeout(getNotContactTimeout);
                getNotContactTimeout = false;
            }

            if ($('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').length == 0) {
                getNotContactTimeout = setTimeout(getNotContact, 1000);
                return false;
            }
            let notContactChats = []
            let chatObject
            $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
            setTimeout(function () {
                $('._3bcLp li').each(function () {
                    if ($(this).attr("data-testid") == "chat_filter_non_contact") {
                        $(this).click()
                        setTimeout(function () {
                            let elements = $('.lhggkp7q.ln8gz9je.rx9719la').get()
                            elements.forEach((element) => {
                                if (element.querySelector('._2a-B5') == null) {
                                    let chatName = element.querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')
                                        .getAttribute("title")
                                    notContactChats.push(chatName)
                                }
                            })
                            chatObject = getItemFromStorage()
                            chatObject.notcontact = notContactChats
                            setItemInStorage(chatObject);
                            $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
                        }, 50)
                    }
                });
                $('._2sDI2').hide();
            }, 50);
        }

        function getContact() {
            if (getChatsTimeout) {
                clearTimeout(getChatsTimeout);
                getChatsTimeout = false;
            }

            if ($('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').length == 0) {
                getChatsTimeout = setTimeout(getContact, 1000);
                return false;
            }
            let contactChats = []
            let chatObject
            $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
            setTimeout(function () {
                $('._3bcLp li').each(function () {
                    if ($(this).attr("data-testid") == "chat_filter_contact") {
                        $(this).click()
                        setTimeout(function () {
                            let elements = $('.lhggkp7q.ln8gz9je.rx9719la').get()
                            elements.forEach((element) => {
                                if (element.querySelector('._2a-B5') == null) {
                                    let chatName = element.querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')
                                        .getAttribute("title")
                                    contactChats.push(chatName)
                                }
                            })
                            chatObject = getItemFromStorage()
                            chatObject.contact = contactChats
                            setItemInStorage(chatObject);
                            $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
                        }, 50)
                    }
                });
                $('._2sDI2').hide();
            }, 50);
        }

        function redrawChats() {
            var step = false;
            var counter = 0;
            var countElements = $('.lhggkp7q.ln8gz9je.rx9719la').length;
            var firstTime = true;
            for (let i = countElements; i > 0; i--) {
                if (firstTime) {
                    i = 0;
                }
                if ($('[data-testid="chat-list"] .lhggkp7q.ln8gz9je.rx9719la[data-testid="list-item-' + i + '"]').length > 0 && !$('[data-testid="chat-list"] .lhggkp7q.ln8gz9je.rx9719la[data-testid="list-item-' + i + '"]').hasClass('d-none')) {
                    if (!step) {
                        step = $('[data-testid="chat-list"] .lhggkp7q.ln8gz9je.rx9719la').height();
                    }
                    $('[data-testid="chat-list"] .lhggkp7q.ln8gz9je.rx9719la[data-testid="list-item-' + i + '"]').css('transform', 'translateY(' + (step * counter) + 'px)');
                    ++counter;
                }
                if (firstTime) {
                    i = countElements;
                    firstTime = false;
                }
            }
        }

        var labelsArr = [];
        var tmp = false;


        function getLabelsFromSite() {
            if (getTestTimeout) {
                clearTimeout(getTestTimeout);
                getTestTimeout = false;
            }

            if ($('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').length == 0) {
                getTestTimeout = setTimeout(getLabelsFromSite, 2000);
                return false;
            }

            $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
            setTimeout(function () {
                $('._3bcLp li').each(function () {
                    if ($(this).attr('data-testid').indexOf('label') > -1) {
                        labelsArr.push($(this).attr('data-testid'))
                    }
                })
            }, 100)
        }

        var index = 0;
        var clickOnFilterTimeout = false;
        var filterIsOpen = false;


        function clickOnFilter() {
            if (filterIsOpen) {
                $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
                filterIsOpen = false;
            }
            if (clickOnFilterTimeout) {
                clearTimeout(clickOnFilterTimeout);
                clickOnFilterTimeout = false;
            }
            clickOnFilterTimeout = setTimeout(function () {
                $('.tt8xd2xn.bugiwsl0.mpdn4nr2.fooq7fky').click();
                filterIsOpen = true;
                clickOnLabel();
            }, 25);
        }

        var clickOnLabelTimeout = false;

        function clickOnLabel() {
            if (clickOnLabelTimeout) {
                clearTimeout(clickOnLabelTimeout);
                clickOnLabelTimeout = false;
            }

            clickOnLabelTimeout = setTimeout(function () {
                if (index < labelsArr.length) {
                    let labelName = $('li[data-testid="' + labelsArr[index] + '"]').get(0).querySelector('._11JPr').innerText.toLowerCase()
                    $('li[data-testid="' + labelsArr[index] + '"]').click();
                    setTimeout(function () {
                        let objStorage = getItemFromStorage()
                        let objVisible = getDisplayFromStorage()
                        let tmpArr = []
                        let elements = $('.lhggkp7q.ln8gz9je.rx9719la').get()
                        elements.forEach((element) => {
                            if (element.querySelector('._2a-B5') == null) {
                                let chatName = element.querySelector('.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')
                                    .getAttribute("title")
                                tmpArr.push(chatName)
                            }
                        })
                        objVisible[labelName] = "1"
                        objStorage[labelName] = tmpArr
                        setItemInStorage(objStorage)
                        setDisplayInStorage(objVisible)
                        ++index;
                        clickOnFilterTimeout = setTimeout(clickOnFilter, 25);
                    }, 25);
                }
            }, 25);
            loadStartButtons()
        }
    }
}, 3000)
