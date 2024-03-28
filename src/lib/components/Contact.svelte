<script lang="ts">
    export let name: string;
    export let phone_number: string;
    export let email: string;
    export let index: string;
</script>

<tr class="hover">
    <th>{index}</th>
    <td>{name}</td>
    <td>{phone_number} </td>
    <td>{email}</td>
</tr>