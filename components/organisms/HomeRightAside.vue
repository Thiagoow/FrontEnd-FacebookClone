<template>
  <Aside>
    <div class="content">
      <h3 class="aside-title">Contatos</h3>

      <div class="contacts-wrapper">
        <span class="status-title">Online</span>

        <ul class="contacts">
          <Contact
            image-u-r-l="profile-pic.png"
            username="Rafael Barros"
            status="online"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Gabriel Rocha Melo"
            status="busy"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Stephanny Motta"
            status="online"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Alexandre Mendes"
            status="busy"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Giovana dos Santos"
            status="busy"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Ronaldo Schimth"
            status="online"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Heloise Vasconcelos"
            status="online"
          />
        </ul>

        <span class="status-title">Offline</span>

        <ul class="contacts">
          <Contact
            image-u-r-l="profile-pic.png"
            username="Deborah Gomes"
            status="offline"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Jéssica Bareoni"
            status="offline"
          />
          <Contact
            image-u-r-l="profile-pic.png"
            username="Chris Nathaniel"
            status="offline"
          />
        </ul>
      </div>
    </div>
  </Aside>
</template>

<style lang="scss" scoped>
.aside {
  @include screen('small') {
    display: none;
  }
}
.content {
  padding: 3rem 0rem;
  display: grid;
  grid-gap: 1.6rem;
  .aside-title {
    color: color(white);
  }
  .contacts-wrapper {
    display: grid;
    grid-gap: 1rem;
    .status-title {
      color: color(gray, shade1);
      font-size: 0.875rem;
    }
  }
  .contacts {
    display: grid;
    grid-gap: 0.7rem;
    .contact {
      border-radius: 27px;
      padding: 3px 0;
      padding-left: 3px;
    }
  }
}
</style>
