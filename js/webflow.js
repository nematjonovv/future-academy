document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".whomitem");
  items.forEach((item) => {
    item.addEventListener("click", function () {
      // Barcha whomItem larni border dan tozalaymiz
      items.forEach((el) => el.classList.remove("active"));
      // Klik qilingan whomItem ga border qo‘shamiz
      this.classList.add("active");
    });
  });
});

const courseChildren = [
  {
    name: "Робототехника",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Шахматы",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Английский язык",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
];
const courseTeenge = [
  {
    name: "Web-разработка",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Английский язык",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Soft skills",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "3D-моделирование и дизайн",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
];
const courseGrown = [
  {
    name: "Блогинг",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Робототехника",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Мультимедиа",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "3D-моделирование и дизайн",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Робототехника",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Web-разработка",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
  {
    name: "Создание игр",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid facere dolor magnam minus. Officia impedit ad vitae distinctio hic!",
    continues: 5,
    price: 100,
  },
];

const jobsType = {
  children: courseChildren,
  teenagre: courseTeenge,
  grownPerson: courseGrown,
};

let jobsTypeParent = document.querySelector(".jobstype");
let whomBtns = document.querySelectorAll(".whomitem");
let defaultValue = "children";

let aboutWrappen = document.querySelector(".aboutCourseWrapper");
let aboutText = document.querySelector(".aboutText");

function renderCourse(category) {
  jobsTypeParent.innerHTML = "";

  // aboutText.innerHTML = ""
  if (jobsType[category]) {
    jobsType[category].forEach((course) => {
      let typeBtn = document.createElement("button");
      typeBtn.classList.add("job-button");
      typeBtn.textContent = course.name;

      typeBtn.addEventListener("click", () => {
        aboutWrappen.classList.remove("aboutHidden");
        console.log(course);
        aboutText.innerHTML = `
            <h1 class="aboutTitle">${course.name}</h1>
          <p class="aboutDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam laboriosam cum placeat corporis! Autem, temporibus voluptas maiores adipisci molestiae nobis?</p>
          <p class="aboutContinues">Срок обучения: ${course.continues} месяц</p>
          <p class="price">от  ${course.price} ₽ в месяц</p>
          <span>
            <p class="addDesc">1 занятие бесплатное</p>
            <p class="mentions">Прежде чем начать 
              обучение советуем записаться на пробное заниятие</p>
          </span>
          <a class="aboutBtn" href="contact.html">Записаться на пробное занятие</a>
        </div>
            `;
      });
      jobsTypeParent.appendChild(typeBtn);
    });
  }
}

renderCourse(defaultValue);

whomBtns.forEach((whomBtn) => {
  whomBtn.addEventListener("click", (btn) => {
    let clickBtn = btn.target.closest(".whomitem");
    let value = clickBtn.value;
    if (!clickBtn) return;
    renderCourse(value);
  });
});

const reviewsData = [
  {
    id: 1,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandaea itaque, asperiores excepturi voluptatum alias  quisquam sequi. Consequatur perferendis amet beatae!",
    rate: 4.7,
  },
  {
    id: 2,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, repudiandae  nesciunt, quas nostrum tenetur ipsa voluptas debitis non soluta itaque, sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.5,
  },
  {
    id: 3,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandae impedit ducimus quia tenetur ipsa voluptas debitis non soluta itaque, asperiores excepturi alias cupiditate sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.4,
  },
  {
    id: 4,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandae impedit ducimus quia tenetur ipsa voluptas debitis non soluta itaque, asperiores excepturi voluptatum alias cupiditate quisquam sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.8,
  },
  {
    id: 5,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandae impedit ducimus quia ipsa voluptas debitis soluta itaque, asperiores excepturi voluptatum alias quisquam sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.9,
  },
  {
    id: 6,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandae impedit ducimus quia tenetur ipsa voluptas debitis non soluta itaque, asperiores excepturi voluptatum alias cupiditate quisquam sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.2,
  },
  {
    id: 7,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit, adipisicing elit. Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandae impedit ducimus quia tenetur ipsa voluptas debitis non soluta itaque, asperiores excepturi voluptatum alias cupiditate quisquam sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4,
  },
  {
    id: 8,
    name: "Имя Фамилия",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet consectetur, asperiores excepturi voluptatum alias adipisicing elit. Ex, repudiandae nemo laudantium nesciunt, quas nostrum recusandae impedit ducimus quia tenetur ipsa voluptas debitis non soluta itaque, asperiores excepturi voluptatum alias cupiditate quisquam sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.4,
  },
  {
    id: 9,
    name: "Имя Фамилия9",
    studentOf: "Студент курса «WEB-разработчик»",
    desc: "Lorem ipsum dolor sit amet quas nostrum recusandae impedit ducimus quia tenetur ipsa voluptas debitis non soluta itaque, asperiores excepturi voluptatum alias cupiditate quisquam sequi. Consequatur perferendis fuga amet beatae!",
    rate: 4.7,
  },
];
let reviews = document.querySelector(".comments");

reviewsData.forEach((e) => {
  let item = document.createElement("div");
  item.classList.add("reviews-card");
  item.innerHTML = `
        <div class="card-top">
            <img src="images/user.png" alt="" />
            <span>
                <b><p>${e.name}</p></b>
                <p>${e.studentOf}</p>
            </span>
        </div>
        <p class="card-comment">${e.desc}</p>
        <span class="rate">${e.rate}/5</span>
    `;
  reviews.appendChild(item);
});

window.onload = function () {
  let reviewsContainer = document.querySelector(".reviews-child");
  reviewsContainer.scrollLeft =
    (reviewsContainer.scrollWidth - reviewsContainer.clientWidth) / 2;
};


let exitAbout = document.querySelector(".icon");

exitAbout.addEventListener("click", () => {
  aboutWrappen.classList.add("aboutHidden");
});



let closeBtn = document.querySelector('.close-btn')
let openBtn = document.querySelector('.burger-menu')
let navbarPlace = document.querySelector('.navBarPlace')

openBtn.addEventListener('click',()=>{
    navbarPlace.classList.remove('navBarPlace-toggle')
})
closeBtn.addEventListener('click',()=>{
    navbarPlace.classList.add('navBarPlace-toggle')
})



const personsData = [
    {
        image: "images/user1.png",
        name: "Алексей Иванов",
        description: "Шахматный гроссмейстер, более 15 лет в профессии."
    },
    {
        image: "images/user2.png",
        name: "Мария Смирнова",
        description: "Победительница международных олимпиад по математике."
    },
    {
        image: "images/user3.png",
        name: "Дмитрий Петров",
        description: "Программист и специалист по робототехнике."
    },
    {
        image: "images/user4.png",
        name: "Екатерина Сидорова",
        description: "Дизайнер, преподаёт 3D-моделирование более 5 лет."
    },
    {
        image: "images/user5.png",
        name: "Иван Васильев",
        description: "Преподаватель английского языка, 7 лет опыта."
    },
    {
        image: "images/user6.png",
        name: "Анна Кузнецова",
        description: "Эксперт по soft skills, коуч и бизнес-тренер."
    },
    {
        image: "images/user7.png",
        name: "Сергей Николаев",
        description: "Геймдизайнер, создал более 10 игр."
    },
    {
        image: "images/user8.png",
        name: "Наталья Орлова",
        description: "Профессиональный блогер, ведёт курсы по контенту."
    },
    {
        image: "images/user9.png",
        name: "Владимир Соловьёв",
        description: "Преподаватель по мультимедиа, видеомонтажу и анимации."
    },
    {
        image: "images/user10.png",
        name: "Ольга Михайлова",
        description: "Специалист по искусственному интеллекту и машинному обучению."
    }
];

let personsSlide = document.querySelector(".our-persons-slide");

personsData.forEach((person) => {
    let personItem = document.createElement("div");
    personItem.classList.add("");

    personItem.innerHTML = `

    `;

    personsSlide.appendChild(personItem);
});



