<script>
export default {
  name: 'accounts-edit',
  data: () => {
    return {
      sub_title: 'Editando conta'
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('updateAccount', this.account)
        .then(() => {
          this.$router.push('/contas')
        })
    }
  },
  computed: {
    account () {
      return this.$store.state.account.accountView
    },
    banks () {
      return this.$store.state.bank.bankList
    }
  },
  created () {
    this.$store.dispatch('getBanks')
      .then(() => {
        this.$store.dispatch('getAccount', this.$route.params.id)
      })
  }
}
</script>
