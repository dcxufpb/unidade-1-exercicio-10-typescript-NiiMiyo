function isEmpty(str: string): boolean {
	let spaceCount = str.length - str.replace(" ", "").length;
	return str == null || spaceCount == str.length;
}

export class Loja {
	constructor(
		public nome_loja: string,
		public logradouro: string,
		public numero: number,
		public complemento: string,
		public bairro: string,
		public municipio: string,
		public estado: string,
		public cep: string,
		public telefone: string,
		public observacao: string,
		public cnpj: string,
		public inscricao_estadual: string
	) {}

	public dados_loja(): string {
		// Implemente aqui
		this.verifica_loja();

		let numeroStr: string =
			this.numero <= 0 ? "s/n" : this.numero.toString();

		let ln2: string = `${this.logradouro}, ${numeroStr}`;
		ln2 += isEmpty(this.complemento) ? "" : ` ${this.complemento}`;
		ln2 += "\n";

		let ln3 = isEmpty(this.bairro) ? "" : `${this.bairro} - `;
		ln3 += `${this.municipio} - ${this.estado}\n`;

		let ln4 = isEmpty(this.cep) ? "" : `CEP:${this.cep}`;
		if (!isEmpty(this.telefone)) {
			ln4 += isEmpty(ln4) ? "" : " ";
			ln4 += `Tel ${this.telefone}`;
		}
		ln4 += isEmpty(ln4) ? "" : "\n";

		let ln5 = isEmpty(this.observacao) ? "" : `${this.observacao}`;
		ln5 += "\n";

		let output = this.nome_loja + "\n";
		output += `${ln2}`;
		output += `${ln3}`;
		output += `${ln4}`;
		output += `${ln5}`;
		output += `CNPJ: ${this.cnpj}\n`;
		output += `IE: ${this.inscricao_estadual}\n`;

		return output;
	}

	verifica_loja(): void {
		if (isEmpty(this.nome_loja)) {
			throw new Error(`O campo nome da loja é obrigatório`);
		}

		if (isEmpty(this.logradouro)) {
			throw new Error(`O campo logradouro do endereço é obrigatório`);
		}

		if (isEmpty(this.municipio)) {
			throw new Error(`O campo município do endereço é obrigatório`);
		}

		if (isEmpty(this.estado)) {
			throw new Error(`O campo estado do endereço é obrigatório`);
		}

		if (isEmpty(this.cnpj)) {
			throw new Error(`O campo CNPJ da loja é obrigatório`);
		}

		if (isEmpty(this.inscricao_estadual)) {
			throw new Error(`O campo inscrição estadual da loja é obrigatório`);
		}
	}
}
