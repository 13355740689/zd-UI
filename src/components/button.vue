<template>
	<button
		class="zd-button"
		:class="[
			`zd-button--${type}`,
			{
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle,
				'is-disabled': disabled
			}
		]"
		:disabled="disabled"
		@click="handleClick"
	>
		<i v-if="icon" :class="icon"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: 'zdButton',
	props: {
		type: {
			type: String,
			default: 'default'
		},
		plain: {
			type: Boolean,
			default: false
		},
		round: {
			type: Boolean,
			default: false
		},
		circle: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	created() {
		console.log(this.type);
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e);
		}
	}
};
</script>

<style lang="scss" scoped>
.zd-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: 0.1s;
	font-weight: 500;
	//禁止元素的文字被选中
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 12px 20px;
	font-size: 14px;
	border-radius: 4px;
	&:hover,
	&:focus {
		color: #409eff;
		border-color: #c6e2ff;
		background-color: #ecf5ff;
	}
}

.zd-button--primary {
	color: #fff;
	background-color: #409eff;
	border-color: #409eff;

	&:hover,
	&:focus {
		background: #66b1ff;
		border-color: #66b1ff;
		color: #fff;
	}
}
.zd-button--success {
	color: #fff;
	background-color: #67c23a;
	border-color: #67c23a;
	&:hover,
	&:focus {
		background: #85ce61;
		border-color: #85ce61;
		color: #fff;
	}
}
.zd-button--info {
	color: #fff;
	background-color: #909399;
	border-color: #909399;
	&:hover,
	&:focus {
		background: #a6a9ad;
		border-color: #a6a9ad;
		color: #fff;
	}
}
.zd-button--warning {
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c;
	&:hover,
	&:focus {
		background: #ebb563;
		border-color: #ebb563;
		color: #fff;
	}
}
.zd-button--danger {
	color: #fff;
	background-color: #f56c6c;
	border-color: #f56c6c;
	&:hover,
	&:focus {
		background: #f78989;
		border-color: #f78989;
		color: #fff;
	}
}

// 朴素的按钮
.zd-button.is-plain {
	&:hover,
	&:focus {
		background: #fff;
		border-color: #409eff;
		color: #409eff;
	}
}
.zd-button--primary.is-plain {
	color: #409eff;
	background: #ecf5ff;
	border-color: #b3d8ff;
	&:hover,
	&:focus {
		background: #409eff;
		border-color: #409eff;
		color: #fff;
	}
}
.zd-button--success.is-plain {
	color: #67c23a;
	background: #f0f9eb;
	border-color: #c2e7b0;
	&:hover,
	&:focus {
		background: #67c23a;
		border-color: #67c23a;
		color: #fff;
	}
}

.zd-button--info.is-plain {
	color: #909399;
	background: #f4f4f5;
	border-color: #d3d4d6;
	&:hover,
	&:focus {
		background: #909399;
		border-color: #909399;
		color: #fff;
	}
}
.zd-button--warning.is-plain {
	color: #e6a23c;
	background: #fdf6ec;
	border-color: #f5dab1;
	&:hover,
	&:focus {
		background: #e6a23c;
		border-color: #e6a23c;
		color: #fff;
	}
}
.zd-button--danger.is-plain {
	color: #f56c6c;
	background: #fef0f0;
	border-color: #fbc4c4;
	&:hover,
	&:focus {
		background: #f56c6c;
		border-color: #f56c6c;
		color: #fff;
	}
}

.zd-button.is-round {
	border-radius: 20px;
	padding: 12px 23px;
}

//圆形按钮
.zd-button.is-circle {
	border-radius: 50%;
}

.zd-button [class*='zd-icon-'] + span {
	margin-left: 5px;
}

.zd-button.is-disabled,
.zd-button.is-disabled:focus,
.zd-button.is-disabled:hover {
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5;
}

.zd-button--primary.is-disabled,
.zd-button--primary.is-disabled:active,
.zd-button--primary.is-disabled:focus,
.zd-button--primary.is-disabled:hover {
	color: #fff;
	background-color: #a0cfff;
	border-color: #a0cfff;
}
.zd-button--success.is-disabled,
.zd-button--success.is-disabled:active,
.zd-button--success.is-disabled:focus,
.zd-button--success.is-disabled:hover {
	color: #fff;
	background-color: #b3e19d;
	border-color: #b3e19d;
}
.zd-button--info.is-disabled,
.zd-button--info.is-disabled:active,
.zd-button--info.is-disabled:focus,
.zd-button--info.is-disabled:hover {
	color: #fff;
	background-color: #c8c9cc;
	border-color: #c8c9cc;
}
.zd-button--warning.is-disabled,
.zd-button--warning.is-disabled:active,
.zd-button--warning.is-disabled:focus,
.zd-button--warning.is-disabled:hover {
	color: #fff;
	background-color: #f3d19e;
	border-color: #f3d19e;
}
.zd-button--danger.is-disabled,
.zd-button--danger.is-disabled:active,
.zd-button--danger.is-disabled:focus,
.zd-button--danger.is-disabled:hover {
	color: #fff;
	background-color: #fab6b6;
	border-color: #fab6b6;
}
</style>
