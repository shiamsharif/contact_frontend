<script lang="ts">
  import Contact from "$lib/components/Contact.svelte";
  import Container from "postcss/lib/container";

  import type { PageData } from "./$types";

  export let data: PageData;
  const { contacts } = data;
</script>


<section class="px-5 mt-5">
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {#each contacts as contact, i}
          <Contact 
            index={(i+1).toString()}
            name={contact.name}
            phone_number={contact.phone_number}
            email={contact.email}
          />
        {/each}
      </tbody>
    </table>
  </div>
</section>