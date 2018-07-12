<template>
  <div class="ticket-list">
    <div v-for="(item,index) in list" @click="toDetail(item)" class="tk-card" v-if="list && !item.deleted">
      <div class="tk-item">
        <h2>{{ item.scenarioName }}</h2>
        <p class="main-color">
          票价 : {{ item.ticketLevelName }}（ &yen; {{item.originalPrice}}）
          <span class="tk-pull-right">×{{ item.ticketCount }}({{item.ticketLevelType}})</span>
        </p>
        <p>
          <span class="info-color">演出时间: {{ item.scenarioDateName }}</span>
          <span class="main-color tk-pull-right tk-font-xs" v-if="item.saleCount">(出售中: {{ item.saleCount }}张)</span>
        </p>
        <p>
          <span  class="info-color">演出地点: {{ item.placeName }}</span>
        </p>
        <div class="flex-box align-end space-between tk-m-t-sm" :class="{'tk-tag': type !== 'myTickets', 'tk-btn': type === 'myTickets'}">
          <div>
            <span class="tk-e-ticket" v-if="item.ticketType ==='电子票'">电子票</span>
            <span class="tk-pa-ticket" v-else>纸质票</span>
          </div>
          <div>
            <mt-button type="danger" @click.native.stop="toDeliver(item)" v-if="type === 'myTickets'">取票</mt-button>
            <!-- <mt-button type="danger" @click.native.stop="toSell(item)" v-if="type === 'myTickets'">转让</mt-button>
            <p class="info-color tk-font-m" v-if="type === 'pickupTicket' && item.ticketType ==='纸质票'">待自取</p>
            <p class="info-color tk-font-m" v-if="type === 'deliverTicket'">
              <span v-if="item.deliverNo">已快递</span>
              <span v-else>快递处理中</span>
            </p> -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'MyTickets'
}
</script>